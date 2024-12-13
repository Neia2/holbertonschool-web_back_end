#!/usr/bin/env python3
""" Update topics for a school """
from pymongo import MongoClient

def update_topics(mongo_collection, name, topics):
    """Update topics based on the school name"""
    mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics } }
    )
