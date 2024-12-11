#!/usr/bin/env python3
"""Module that collects 10 random numbers using async comprehension."""

from typing import List
import importlib
from async_generator import async_generator


async def async_comprehension() -> List[float]:
    """
    Coroutine that collects 10 random numbers using asynchronous comprehension.
    """
    return [number async for number in async_generator()]
