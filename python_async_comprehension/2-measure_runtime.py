#!/usr/bin/env python3
"""Module to measure runtime of parallel async comprehensions."""

import asyncio
import time
from typing import List
from async_comprehension import async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel and
    measures the runtime.
    Returns the total time taken.
    """
    start_time = time.perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    total_time = time.perf_counter() - start_time
    return total_time
