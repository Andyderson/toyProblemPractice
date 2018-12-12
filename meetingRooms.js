var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a.start - b.start);

  for (var i = 0; i < intervals.length - 1; i++) {
    if (intervals[i].end > intervals[i + 1].start) {
      return false;
    }
  }
  return true;
};

canAttendMeetings([[0, 30], [5, 10], [15, 20]]); //false
