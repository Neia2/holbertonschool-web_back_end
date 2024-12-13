#!/usr/bin/env python3
""" List all documents in a collection """
from pymongo import MongoClient

def list_all(mongo_collection):
    """Lists all documents in the collection"""
    return list(mongo_collection.find())
