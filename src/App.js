import "./App.css";
import { Menu } from "@headlessui/react";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const data = {
  data: [
    {
      id: 1,
      name: "Music",
      videos: [
        {
          id: 0,
          title: "Video Rusak",
          url: "https://www.youtube.com/embed/???",
        },
        {
          id: 1,
          title: "lofi hip hop radio - beats to relax/study to",
          url: "https://www.youtube.com/embed/5qap5aO4i9A",
        },
        {
          id: 2,
          title: "Stunning Studio Ghibli Soundtracks",
          url: "https://www.youtube.com/embed/z4WCaWJgOqM",
        },
        {
          id: 3,
          title: "Best Of Slow Blues -rock (inspiration) (meditation)",
          url: "https://www.youtube.com/embed/krUc72SukAk",
        },
        {
          id: 4,
          title: "Alternative Rock Of The 2000s",
          url: "https://www.youtube.com/embed/UZw-CU32Uqc",
        },
        {
          id: 5,
          title: "Pop Hits 2020",
          url: "https://www.youtube.com/embed/zLB0vicG38I",
        },
        {
          id: 6,
          title: "Rock Ballads 80s 90s Playlist",
          url: "https://www.youtube.com/embed/onSTZGv4BA4",
        },
        {
          id: 7,
          title: "Most Old Beautiful Love Songs",
          url: "https://www.youtube.com/embed/CBYh2CpFwyM",
        },
        {
          id: 8,
          title: "20 Lagu Chrisye Paling Enak Di Dengarkan",
          url: "https://www.youtube.com/embed/MOzuw2_5ziQ",
        },
        {
          id: 9,
          title: "Lagu Pop Indonesia Tahun 2000an",
          url: "https://www.youtube.com/embed/l-jw6_GZj2k",
        },
        {
          id: 10,
          title:
            "New Year Mix 2021 - Best of EDM Party Electro House & Festival Music",
          url: "https://www.youtube.com/embed/WdBldz3YLss",
        },
      ],
    },
    {
      id: 2,
      name: "Tutorial",
      videos: [],
    },
  ],
};

const initalVideos = data.data.map(function (item) {
  return item.videos;
});

function App() {
  return <MyDropdown />;
}

export default App;

function MyDropdown() {
  const [listVideo, setListVideo] = useState([initalVideos[0]]);
  useEffect(() => {
    setListVideo(initalVideos[0]);
  }, []);
  return (
    <>
      <NavBar />
      <div className='container mx-auto px-4 py-4'>
        <Menu>
          <Menu.Button className='shadow font-bold bg-gray-500 color text-white p-2 hover:bg-gray-400'>
            Select Playlist
          </Menu.Button>
          <Menu.Items>
            {data.data.map(function (item) {
              return (
                <Menu.Item
                  key={item.id.toString()}
                  onClick={() => setListVideo(initalVideos[item.id - 1])}
                >
                  {({ active }) => (
                    <button className='shadow bg-slate-400 p-1 hover:bg-slate-300'>
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Menu>
        <ListVideo videos={listVideo} />
      </div>
    </>
  );
}

function ListVideo(props) {
  const [videoUrl, setVideoUrl] = useState([]);

  useEffect(() => {
    const initialUrl = props.videos.map(function (item) {
      return item.url;
    });
    setVideoUrl(initialUrl[1]);
  }, [props]);
  if (props.videos.length === 0) {
    return (
      <h1 className='font-bold'>There is no Videos in the selected Playlist</h1>
    );
  }
  const saved = localStorage.getItem("url");
  return (
    <>
      <div className='mt-4 lg:flex'>
        <div className='lg:w-3/4 mb-2'>
          <div className='aspect-w-16 aspect-h-9'>
            {typeof saved === "undefined" && (
              <iframe
                title='video'
                src={videoUrl}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            )}
            {typeof saved !== "undefined" && (
              <iframe
                title='video'
                src={saved}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
        <div className='lg:w-1/4'>
          <ol className='bg-gray-700 lg:ml-2 overflow-y-auto lg:h-80 shadow-lg'>
            {props.videos.map(function (item, i) {
              return (
                <li
                  className='bg-gray-400 pl-2 py-1 border-2 my-2 hover:bg-gray-200 cursor-pointer'
                  key={i}
                  onClick={() => {
                    setVideoUrl(item.url);
                    localStorage.setItem("url", item.url);
                    console.log("test");
                  }}
                >
                  {item.title}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
