import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// prettier-ignore
export const WORDS = [
  "ability","able","about","above","accept","across","action","active","actual","adapt",
  "admit","adult","advance","advice","affect","afraid","after","again","against","agency",
  "agenda","almost","alone","along","already","always","amount","animal","answer","anyone",
  "anyway","appear","apply","argue","around","arrive","artist","aspect","assist","assume",
  "attack","attend","author","avoid","aware","balance","beauty","became","become","before",
  "begin","behind","belief","belong","better","beyond","bigger","birth","black","blood",
  "board","brain","brand","break","bright","bring","broad","brother","budget","build",
  "buyer","cable","carry","catch","cause","center","chance","change","charge","choice",
  "choose","civil","claim","class","clean","clear","climb","clock","close","coach",
  "coast","color","combine","comfort","common","company","compare","complete","concept","concern",
  "connect","consider","contact","contain","content","control","corner","correct","cost","could",
  "country","course","cover","create","credit","crime","culture","current","damage","danger",
  "dark","data","daughter","decide","decision","deep","defense","degree","demand","design",
  "detail","develop","device","differ","dinner","direct","discover","discuss","disease","doctor",
  "dream","drive","during","early","earth","easily","east","easy","economy","effect",
  "effort","eight","either","energy","enjoy","enough","enter","entire","environment","equal",
  "especially","evening","event","ever","every","evidence","exact","example","exist","expect",
  "experience","expert","explain","express","extend","face","factor","fail","fair","family",
  "famous","father","feature","federal","feeling","field","fight","figure","final","finance",
  "find","finger","finish","first","floor","focus","follow","food","force","foreign",
  "forget","form","former","forward","found","free","friend","front","future","garden",
  "general","generation","glass","goal","great","green","ground","group","growth","guess",
  "guide","happy","hard","health","heart","heavy","help","history","hold","home",
  "hope","horse","hospital","hotel","hour","house","human","idea","identify","image",
  "imagine","impact","important","improve","include","increase","indeed","indicate","industry","information",
  "inside","instead","interest","international","interview","investment","issue","item","join","just",
  "keep","kid","kind","kitchen","knowledge","language","large","last","late","laugh",
  "learn","least","leave","legal","level","life","light","likely","listen","little",
  "local","long","look","lose","love","machine","main","major","manage","management",
  "market","marriage","material","matter","maybe","mean","measure","media","medical","meet",
  "meeting","member","memory","mention","message","method","middle","might","military","million",
  "mind","minute","mission","model","modern","moment","money","month","more","morning",
  "mother","mouth","move","movement","music","must","name","nation","natural","nature",
  "near","nearly","necessary","need","network","never","news","next","night","north",
  "note","nothing","notice","number","occur","offer","office","officer","often","once",
  "only","open","operation","opportunity","option","order","organization","other","others","outside",
  "owner","page","pain","painting","paper","parent","part","participant","particular","partner",
  "party","pass","past","patient","pattern","peace","people","perform","performance","perhaps",
  "period","person","personal","phone","physical","picture","piece","place","plan","plant",
  "play","player","point","police","policy","political","poor","popular","position","positive",
  "possible","power","practice","prepare","present","president","pressure","pretty","prevent","price",
  "private","probably","problem","process","produce","product","production","professional","professor","program",
  "project","property","protect","prove","provide","public","purpose","push","quality","question",
  "quick","quickly","quite","race","radio","raise","range","rate","rather","reach",
  "read","ready","real","reality","realize","reason","receive","recent","recognize","record",
  "reduce","reflect","region","relate","relationship","remain","remember","remove","report","represent",
  "require","research","resource","respond","response","responsibility","result","return","reveal","rich",
  "right","risk","road","role","room","rule","safe","same","save","scene",
  "school","science","score","season","seat","second","section","security","seek","seem",
  "sell","send","sense","series","serious","serve","service","set","seven","several",
  "shake","share","she","shoot","short","should","show","side","sign","significant",
  "similar","simple","simply","since","single","sister","skill","small","smile","social",
  "society","soldier","some","somebody","someone","something","sometimes","son","song","soon",
  "sort","sound","source","south","space","speak","special","specific","speech","spend",
  "sport","spring","staff","stage","stand","standard","star","start","state","statement",
  "station","stay","step","still","stock","stop","store","story","strategy","street",
  "strong","structure","student","study","stuff","style","subject","success","successful","such",
  "suddenly","suffer","suggest","summer","support","sure","surface","system","table","take",
  "talk","task","teach","teacher","team","technology","television","tell","tend","term",
  "test","than","thank","that","their","them","themselves","then","theory","there",
  "these","thing","think","third","this","those","though","thought","thousand","threat",
  "three","through","throughout","throw","time","today","together","tonight","total","tough",
  "toward","town","trade","traditional","training","travel","treat","treatment","tree","trial",
  "trip","trouble","true","truth","turn","type","under","understand","unit","until",
  "upon","use","usually","value","various","very","victim","view","violence","visit",
  "voice","vote","wait","walk","wall","want","war","watch","water","way",
  "weapon","wear","week","weight","well","west","what","when","where","whether",
  "which","while","white","whole","whose","why","wide","wife","will","wind",
  "window","wish","with","within","without","woman","wonder","word","work","worker",
  "world","worry","would","write","writer","wrong","yard","yeah","year","young"
]

export type Difficulty = "easy" | "medium" | "hard";

export function getWordsByDifficulty(difficulty: Difficulty) {
  switch (difficulty) {
    case "easy":
      return WORDS.filter((word) => word.length <= 4);

    case "medium":
      return WORDS.filter((word) => word.length >= 5 && word.length <= 7);

    case "hard":
      return WORDS.filter((word) => word.length >= 8);

    default:
      return WORDS;
  }
}

export function getRandomWords(count: number, difficulty: Difficulty = "easy") {
  const pool = getWordsByDifficulty(difficulty);

  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
