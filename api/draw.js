// 총 참여자 수
let total = 0;

// 남은 당첨 수
let remain = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4
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

  // 남은 전체 당첨 자리 계산
  const totalWinners =
    remain.first +
    remain.second +
    remain.third +
    remain.fourth;

  // 아직 당첨 자리 있으면
  if (totalWinners > 0) {

    // 남은 인원 중 당첨 확률 계산
    const chance = totalWinners / (250 - total + 1);

    // 당첨 여부 결정
    if (Math.random() < chance) {

      // 남은 등수 목록 만들기
      let pool = [];
      if (remain.first > 0) pool.push("first");
      if (remain.second > 0) pool.push("second");
      if (remain.third > 0) pool.push("third");
      if (remain.fourth > 0) pool.push("fourth");

      // 랜덤 등수 선택
      const pick = pool[Math.floor(Math.random() * pool.length)];
      remain[pick]--;

      if (pick === "first")
        return res.json({ title: "🥇 1등 당첨!", desc: "싸이버거 세트" });

      if (pick === "second")
        return res.json({ title: "🥈 2등 당첨!", desc: "메가커피 음료" });

      if (pick === "third")
        return res.json({ title: "🥉 3등 당첨!", desc: "편의점 간식" });

      if (pick === "fourth")
        return res.json({ title: "🎁 4등 당첨!", desc: "마이쮸·새콤달콤" });
    }
  }

  // 꽝 (5등)
  res.json({
    title: "🥺 5등",
    desc: "새해복 많이 받으세요(*^▽^)/★*☆♪"
  });
}

