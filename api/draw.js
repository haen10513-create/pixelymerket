// Vercel 서버 메모리 저장 (간단 버전)
// 배포 유지되는 동안 카운트 유지됨

let totalUsers = 0;

let winners = {
  first: 0,
  second: 0,
  third: 0,
  fourth: 0
};

export default function handler(req, res) {

  // 250명 넘으면 그냥 5등
  if (totalUsers >= 250) {
    return res.status(200).json({
      result: "🙏 5등 — 새해복 많이 받으세요(*^▽^)/★*☆♪"
    });
  }

  totalUsers++;

  let result;

  // 당첨 인원 제한
  if (winners.first < 1) {
    winners.first++;
    result = "🎉 1등 — 싸이버거 세트";
  }
  else if (winners.second < 2) {
    winners.second++;
    result = "🥤 2등 — 메가커피 음료";
  }
  else if (winners.third < 3) {
    winners.third++;
    result = "🍪 3등 — 편의점 간식";
  }
  else if (winners.fourth < 4) {
    winners.fourth++;
    result = "🍬 4등 — 마이쮸 / 새콤달콤";
  }
  else {
    result = "🙏 5등 — 새해복 많이 받으세요(*^▽^)/★*☆♪";
  }

  res.status(200).json({ result });
}
