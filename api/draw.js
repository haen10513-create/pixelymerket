let total = 0;

let winners = {
  first: 0,
  second: 0,
  third: 0,
  fourth: 0
};

export default function handler(req, res) {

  // 선착순 250명 제한
  if (total >= 250) {
    return res.json({
      title: "마감됨",
      desc: "선착순 250명 이벤트 종료"
    });
  }

  total++;

  let result;

  // 1등 1명
  if (winners.first < 1) {
    winners.first++;
    result = {
      title: "🥇 1등 당첨!",
      desc: "싸이버거 세트"
    };
  }

  // 2등 2명
  else if (winners.second < 2) {
    winners.second++;
    result = {
      title: "🥈 2등 당첨!",
      desc: "메가커피 음료"
    };
  }

  // 3등 3명
  else if (winners.third < 3) {
    winners.third++;
    result = {
      title: "🥉 3등 당첨!",
      desc: "편의점 간식"
    };
  }

  // 4등 4명
  else if (winners.fourth < 4) {
    winners.fourth++;
    result = {
      title: "🎁 4등 당첨!",
      desc: "마이쮸·새콤달콤"
    };
  }

  // 나머지 = 5등
  else {
    result = {
      title: "🥺 5등",
      desc: "새해복 많이 받으세요(*^▽^)/★*☆♪"
    };
  }

  res.json(result);
}
