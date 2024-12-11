#!/usr/bin/env python3
"""Module for an asynchronous generator that yields random numbers."""

import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """
    An asynchronous generator that yields 10 random numbers between 0 and 10.
    It waits 1 second before yielding each number.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
