#!/usr/bin/env python3
"""
Module contains the async coroutine `wait_n` that spawns
`wait_random` multiple times and returns the delays in ascending order.
"""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawns wait_random n times and returns
    list of delays in ascending order."""
    delays = await asyncio.gather(*(wait_random(max_delay) for _ in range(n)))
    return sorted(delays)
