const activities = [
    {
        id: 1,
        title: "Yoga Session",
        description: "Morning yoga for all levels",
        date: "2024-01-20",
        time: "08:00",
        location: "Main Hall",
        participants: ["Alice Johnson", "Bob Smith", "Carol Davis"]
    },
    {
        id: 2,
        title: "Cooking Workshop",
        description: "Learn to cook Italian cuisine",
        date: "2024-01-21",
        time: "14:00",
        location: "Kitchen",
        participants: ["David Lee", "Emma Wilson"]
    },
    {
        id: 3,
        title: "Photography Walk",
        description: "Capture the beauty of nature",
        date: "2024-01-22",
        time: "10:00",
        location: "Park",
        participants: ["Frank Brown", "Grace Martinez", "Henry Taylor", "Iris Anderson"]
    }
];

function renderActivities() {
    activities.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'activity-card';
        
        const participantsList = activity.participants.length > 0 
            ? `<ul class="participants-list">
                ${activity.participants.map(p => `<li>${p}</li>`).join('')}
               </ul>`
            : `<p class="no-participants">No participants yet</p>`;
        
        card.innerHTML = `
            <h3>${activity.title}</h3>
            <p>${activity.description}</p>
            <div class="activity-details">
                <p>📅 ${activity.date}</p>
                <p>🕐 ${activity.time}</p>
                <p>📍 ${activity.location}</p>
            </div>
            <div class="participants-section">
                <h4>👥 Participants (${activity.participants.length})</h4>
                ${participantsList}
            </div>
        `;
        
        document.getElementById('activities-container').appendChild(card);
    });
}