const stories = [
    { type: 'image', content: 'Pic1.jpeg' },
    { type: 'image', content: 'https://www.facebook.com/stories/100855268466880/UzpfSVNDOjE4NDkxODI2NDIxNTUzNzM=/?bucket_count=9&source=story_tray' },
    { type: 'image', content: 'https://www.facebook.com/stories/208441866503809/UzpfSVNDOjE3ODg1ODA4NzUwNDU0NzY=/?bucket_count=9&source=story_tray' },
    { type: 'image', content: 'https://via.placeholder.com/200x300?text=Story+3' }
];

function renderStories(storyData) {
    const container = document.getElementById('story-container');

    storyData.forEach(story => {
        const box = document.createElement('div');
        box.className = 'story-box';

        if (story.type === 'image') {
            const img = document.createElement('img');
            img.src = story.content;
            box.appendChild(img);
        } else if (story.type === 'text') {
            const text = document.createElement('p');
            text.textContent = story.content;
            box.appendChild(text);
        }

        container.appendChild(box);
    });
}

// Render the stories
renderStories(stories);
