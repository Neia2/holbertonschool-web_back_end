#!/usr/bin/env python3
""" Find schools by topic """
from pymongo import MongoClient

def schools_by_topic(mongo_collection, topic):
    """Returns schools with a specific topic"""
    return mongo_collection.find({ "topics": topic })
