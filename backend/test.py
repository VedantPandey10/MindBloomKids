from sqlalchemy import create_engine

engine = create_engine("postgresql+psycopg://postgres:Vedant%40123@127.0.0.1:5433/mindbloom")
conn = engine.connect()
print("Connected!")
