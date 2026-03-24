"""
Удаляет белый фон с PNG-изображения, загружает результат в S3 и возвращает CDN URL.
"""
import json
import os
import base64
import boto3
import urllib.request
from io import BytesIO
from PIL import Image


def remove_white_background(img: Image.Image, threshold: int = 240) -> Image.Image:
    img = img.convert("RGBA")
    data = img.getdata()
    new_data = []
    for r, g, b, a in data:
        if r >= threshold and g >= threshold and b >= threshold:
            new_data.append((r, g, b, 0))
        else:
            new_data.append((r, g, b, a))
    img.putdata(new_data)
    return img


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    image_url = body.get("image_url")
    output_key = body.get("output_key", "favicon-nobg.png")

    with urllib.request.urlopen(image_url) as resp:
        img_data = resp.read()

    img = Image.open(BytesIO(img_data))
    img_no_bg = remove_white_background(img)

    buf = BytesIO()
    img_no_bg.save(buf, format="PNG")
    buf.seek(0)

    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )
    s3.put_object(Bucket="files", Key=output_key, Body=buf.read(), ContentType="image/png")

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{output_key}"

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"url": cdn_url}),
    }
