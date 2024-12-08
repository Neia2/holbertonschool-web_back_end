#!/usr/bin/env python3
"""
Module contains the function `measure_time` that measures
the runtime for executing `wait_n` n times.
"""

import time
import asyncio
from typing import List
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures the average execution time of wait_n."""
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    total_time = time.time() - start_time
    return total_time / n
