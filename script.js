
const videos = [
    {
        title: 'Nàng thơ - Hoàng Dũng •cover by Ngô Nam•',
        thumbnail: `https://s1.zerochan.net/Hyouka.600.1841404.jpg`,
        url: `https://www.youtube.com/embed/gH55ArbpwdM?si=b-cuc6NdXTol3Tzd`
    },
    {
        title: 'Có ai hẹn hò cùng em chưa - Quân AP •Cover by Ngô Nam•',
        thumbnail: `https://i.ytimg.com/vi/nH6Cng95g54/hqdefault.jpg`,
        url: `https://www.youtube.com/embed/nH6Cng95g54?si=4ptGWn5mWkC_-_qk`
    },
    {
        title: 'Yêu đương khó quá thì chạy về khóc với anh - Erik •Cover by Ngô Nam•',
        thumbnail: `https://i.ytimg.com/an_webp/aPxvFyWyTqA/mqdefault_6s.webp?du=3000&sqp=CKDG_rQG&rs=AOn4CLCJOq5RdsQeYx84Q3vDHdJ_tTXnEg`,
        url: `https://www.youtube.com/embed/aPxvFyWyTqA?si=qr2g6a8nwM5gaRPX`
    },
    {
        title: 'Hết thương cạn nhớ - Đức Phúc •Cover by Ngô Nam•',
        thumbnail: `https://i.ytimg.com/vi/YBZBp9aezEI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAvACigIMCAAQARghICEofzAP&rs=AOn4CLCH7-EfmFd2m_nnHhhc_vC8SpdNKg`,
        url: `https://www.youtube.com/embed/YBZBp9aezEI?si=ZETOY6WTrou1uqE5`
    },
    {
        title: 'Năm ấy - Đức Phúc •Cover by Ngô Nam•',
        thumbnail: `https://i.pinimg.com/564x/44/ae/8a/44ae8ad073f4024bcb47495fcb3e9ec1.jpg`,
        url: `https://www.youtube.com/embed/SfrL4hKy8xk?si=w7rh4Dm9hAujnuQT`
    },
    {
        title: 'Chỉ muốn bên em lúc này- Huy Vạc •Cover by Ngô Nam•',
        thumbnail: `https://i.ytimg.com/vi/ACuLYP5gGyA/maxresdefault.jpg`,
        url: `https://www.youtube.com/embed/3cMPiHo-k3o?si=o3fxvmSjUo1aJ3HE`
    },
];

function displayVideos(videos) {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
            <button onclick="playVideo('${video.url}')">Play</button>
        `;
        videoContainer.appendChild(videoCard);
    });
}

function playVideo(url) {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `
        <iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="back-button">
            <button onclick="displayVideos(videos)">Back</button>
        </div>
    `;
}

function searchVideos() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchInput));
    displayVideos(filteredVideos);
}

document.addEventListener('DOMContentLoaded', () => {
    displayVideos(videos);
});
