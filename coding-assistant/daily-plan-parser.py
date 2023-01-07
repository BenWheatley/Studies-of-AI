#!/usr/bin/python3
# -*- coding: utf-8 -*-

import re
import matplotlib.pyplot as plt
import numpy as np
import argparse

class Day:
    """
    A class representing a single day in the diary.
    """
    def __init__(self, date: str, items: List[str]):
        self.date = date
        self.items = items

def parse_diary(diary: str) -> List[Day]:
    """
    Parse a markdown formatted diary and return a list of Day objects.
    
    Parameters:
    - diary: a string containing the markdown formatted diary.
    
    Returns:
    - a list of Day objects.
    """
    # Split the diary into a list of lines
    lines = diary.split('\n')
    
    # Initialize an empty list of days
    days = []
    
    # Iterate over the lines
    i = 0
    while i < len(lines):
        # Check if the line is a date
        date_match = re.match(r'^[A-Z][a-z]* \d{1,2} [A-Z][a-z]*', lines[i])
        if date_match:
            # Extract the date
            date = date_match.group(0)
            
            # Initialize an empty list of items
            items = []
            
            # Move to the next line
            i += 1
            
            # Iterate over the following lines until a new date is found
            while i < len(lines) and not re.match(r'^[A-Z][a-z]* \d{1,2} [A-Z][a-z]*', lines[i]):
                # Check if the line is an item
                item_match = re.match(r'- \[x\] (.*)', lines[i])
                if item_match:
                    # Extract the item
                    item = item_match.group(1)
                    
                    # Add the item to the list
                    items.append(item)
                
                # Move to the next line
                i += 1
            
            # Create a Day object and append it to the list
            days.append(Day(date, items))
        else:
            # Move to the next line
            i += 1
    
    return days

def main():
    # Parse the command line arguments
    parser = argparse.ArgumentParser()
    parser.add_argument('filename', help='the name of the file containing the diary')
    args = parser.parse_args()

    # Load the diary from the file
    with open(args.filename, 'r') as f:
        diary = f.read()

    # Parse the diary
    days = parse_diary(diary)

    # Extract the dates and the number of tasks completed
    dates = [day.date for day in days]
    task_counts = [len(day.items) for day in days]

    # Create an array of integers from 0 to the number of days
    x = np.arange(len(dates))

    # Create a bar plot
    plt.bar(x, task_counts)

    # Set the labels for the x-axis
    plt.xticks(x, dates)

    # Set the labels for the y-axis
    plt.ylabel('Number of tasks')

    # Display the plot
    plt.show()

if __name__ == '__main__':
    main()