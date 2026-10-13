// 오늘의 응원 한마디 - Vercel 서버리스 함수
// 응원 문장은 이 파일에만 있습니다. 화면(index.html)은 이 함수가 보낸 문장만 보여 줍니다.

const MESSAGES = [
  "오늘 한 걸음만 내디뎌도 충분해요.",
  "지금까지 버텨 온 것만으로도 정말 대단해요.",
  "천천히 가도 괜찮아요. 멈추지만 않으면 돼요.",
  "어제보다 조금 나아졌다면 오늘은 성공이에요.",
  "실수는 배우고 있다는 가장 확실한 증거예요.",
  "오늘의 작은 노력이 내일의 큰 힘이 될 거예요.",
  "당신의 속도는 당신이 정해도 돼요.",
  "힘들 땐 잠깐 쉬어 가도 괜찮아요.",
  "생각보다 훨씬 잘하고 있어요.",
  "오늘도 해낼 수 있어요. 늘 그래 왔으니까요.",
  "완벽하지 않아도 시작한 것 자체가 멋져요.",
  "좋은 일은 꾸준히 준비한 사람에게 찾아와요.",
  "오늘 하루도 스스로를 칭찬해 주세요.",
  "포기하지 않는 마음이 가장 큰 재능이에요.",
  "지금 이 순간에도 한 뼘씩 자라고 있어요.",
];

const DEFAULT_NAME = "여러분";
const MAX_NAME_LENGTH = 20;

module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "GET 요청만 받을 수 있어요." });
  }

  const raw = typeof req.query.name === "string" ? req.query.name : "";
  const name = raw.trim().slice(0, MAX_NAME_LENGTH) || DEFAULT_NAME;

  const sentence = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  return res.status(200).json({
    name,
    message: `${name}, ${sentence}`,
  });
};
