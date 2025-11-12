const dateMeeting = [
    { "id": 1, "start": "09:00", "end": "10:30" },
    { "id": 2, "start": "09:45", "end": "11:00" },
    { "id": 3, "start": "10:40", "end": "12:00" },
    { "id": 4, "start": "13:00", "end": "14:00" }
]

// output
// {
//     "scheduled": [1, 3, 4],
//     "count": 3
// }

// Rules:
//     1. Meetings cannot overlap.
//     2. You may assume all inputs are on the same day.

const meetingRoomScheduler = (listMeeting) => {
    const listExpectedMeeting = [];

    listMeeting.map((meeting, index) => {
        if(index === 0) {
            listExpectedMeeting.push(meeting)
        }
        else {
           const lastListExpectedMeeting = listExpectedMeeting[listExpectedMeeting.length - 1];
           const tempPrevEndDate = new Date(`2025-11-12T${lastListExpectedMeeting.end}:00`)
           const tempNowStartDate = new Date(`2025-11-12T${meeting.start}:00`)

            if (tempNowStartDate >= tempPrevEndDate) {
                listExpectedMeeting.push(meeting);
            }
        }
    })

    return {
        "scheduled": listExpectedMeeting.map(meeting => meeting.id),
        "count": listExpectedMeeting.length
    }
}

console.log(meetingRoomScheduler(dateMeeting));
