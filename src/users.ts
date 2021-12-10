export interface Iusers {
  id: number;
  name: string;
  imgUrl: string;
  likes: number;
  followers: number;
  following: number;
}

export const userData: Iusers[] = [
  {
    id: 50,
    name: "Leanne Graham",
    imgUrl:
      "https://i.pinimg.com/474x/31/d9/62/31d962036bba1061cf539b63ae3c10fd.jpg",
    likes: 126,
    followers: 25,
    following: 45656,
  },
  {
    id: 60,
    name: "Ervin Howell",
    imgUrl:
      "https://images.unsplash.com/photo-1593757107729-eae8bcc74f8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    likes: 785,
    followers: 78853,
    following: 56,
  },
  {
    id: 70,
    name: "Clementine Bauch",
    imgUrl:
      "https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg=",
    likes: 4562,
    followers: 2301,
    following: 4562,
  },
  {
    id: 80,
    name: "Patricia Lebsack",
    imgUrl:
      "https://p0.pikist.com/photos/439/900/portrait-people-adult-man-face-guy-young-handsome-hair.jpg",
    likes: 2365,
    followers: 8000,
    following: 895,
  },
  {
    id: 90,
    name: "Chelsey Dietrich",
    imgUrl: "https://static3.bigstockphoto.com/1/7/8/large1500/87148808.jpg",
    likes: 10000,
    followers: 4560,
    following: 23,
  },
  {
    id: 100,
    name: "Considine-man",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_nEjEqWvdWm161vx-K1t0aX9igakToktTNyLOTpByeqzkORc15t05SNVmJm0bHpbZo0s&usqp=CAU",
    likes: 236,
    followers: 17861,
    following: 4458,
  },
];
