#!/usr/bin/env python3
"""
Module contains the async coroutine `task_wait_n` that uses asyncio Tasks
to spawn wait_random and return delays in ascending order.
"""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawns task_wait_random n times and returns
    list of delays in ascending order."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = [await task for task in asyncio.as_completed(tasks)]
    return delays
