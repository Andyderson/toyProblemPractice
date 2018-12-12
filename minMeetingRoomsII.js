const minMeetingRooms = intervals => {
  if (!intervals.length) {
    return 0;
  }

  let results = [];

  intervals = intervals.sort((a, b) => a[0] - b[0]);

  intervalsLoop: for (let i = 0; i < intervals.length; i++) {
    for (let j = 0; j < results.length; j++) {
      if (results[j] <= intervals[i][0]) {
        results[j] = intervals[i][1];
        continue intervalsLoop;
      }
    }
    results.push(intervals[i][1]);
  }
  return results.length;
};

minMeetingRooms([[0, 30], [5, 10], [15, 20]]); //2
meetingRooms([[7, 10], [2, 4]]); //1
