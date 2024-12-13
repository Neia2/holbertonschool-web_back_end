#!/usr/bin/env python3
"""Simple helper function module"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Returns a tuple containing a start and end index for a pagination request.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        tuple: A tuple containing the start index and end index.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index