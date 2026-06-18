import { useState, useCallback } from "react";
import "./IdeathonTheme.css";

// ─── 1. STUDENT DATA ─────────────────────────────────────────────────────────
const INITIAL_STUDENTS = [
  { id: "23FE1A05L6", name: "SHAIK NAJIYA SANOBER", email: "shaiknajiyasanober158@gmail.com" },
  { id: "23FE1A05C3", name: "MARADANI KEERTHI VYSHNAVI", email: "keerthi010506@gmail.com" },
  { id: "24FE5A0515", name: "NIDAMANURI VAMSI", email: "vamsia585@gmail.com" },
  { id: "23FE1A6107", name: "BHAVANAM RAHUL", email: "bhavanamrahul16@gmail.com" },
  { id: "23FE1A05J6", name: "RAVULAPALLI AJAY KUMAR", email: "ajayravulapalli.555@gmail.com" },
  { id: "23FE1A1241", name: "POREDDY NAGA VARSHITHA", email: "varshithakrishnareddy2016@gmail.com" },
  { id: "23FE1A6142", name: "POLIMERA JAYA SAI JASWANTH", email: "jayasaijaswanthp@gmail.com" },
  { id: "23FE1A1222", name: "KANCHETI CHETHANA LAKSHMI", email: "chethanalakshmi13@gmail.com" },
  { id: "23FE1A4417", name: "GUNTAKA PRANAV NADH REDDY", email: "pranavnadh6@gmail.com" },
  { id: "23FE1A4427", name: "KOLIKI JHANSI", email: "kolikijhansi181@gmail.com" },
  { id: "23FE1A4444", name: "RAPURU VARSHINI", email: "rapurvarshini2964@gmail.com" },
  { id: "23FE1A05L0", name: "SHAIK BALA KHASIM BEE", email: "khasimbee2606@gmail.com" },
  { id: "23FE1A05L7", name: "SHAIK NAZIYA", email: "naziyashaik05l7@gmail.com" },
  { id: "23FE1A4423", name: "KANKIPATI VENKATA KRISHNA SATWIK", email: "satwik.kankipati@gmail.com" },
  { id: "23FE1A05J2", name: "RAMARAJU NAGA ESWARA SRAVAN", email: "sravantatikonda123@gmail.com" },
  { id: "23FE1A1242", name: "POSINA VARNITHA", email: "varnithaposina@gmail.com" },
  { id: "23FE1A4450", name: "SHAIK SAAJITH", email: "saajithmkks36@gmail.com" },
  { id: "23FE1A1210", name: "DANABOINA HARI KRISHNA YADAV", email: "krishnahariyadav440@gmail.com" },
  { id: "23FE1A4419", name: "JILLELAMUDI NAGA SRI VIDHYA", email: "vidhyajillelamudi346@gmail.com" },
  { id: "23FE1A4422", name: "KANDIMALLA JYOTHI LAKSHMI", email: "jyothikandimalla6@gmail.com" },
  { id: "23FE1A4435", name: "NALLA SAI CHARAN", email: "charannalla07@gmail.com" },
  { id: "23FE1A05D0", name: "MODALAVALASA RAVI KIRAN", email: "ravikiranmodalavalasa@gmail.com" },
  { id: "23FE1A05D6", name: "MOLLETI SRAVANI", email: "molletisravani27@gmail.com" },
  { id: "24FE5A6102", name: "DIVI SUKUMAR", email: "divisukumar005@gmail.com" },
  { id: "23FE1A4434", name: "MEDURI PREM SAI", email: "mpremsai147@gmail.com" },
  { id: "23FE1A0520", name: "BITRA NAVADEEP", email: "inavadeep1205@gmail.com" },
  { id: "23FE1A0486", name: "MALLEBOYINA HARSHA VARDHAN", email: "malleboyinasunny29@gmail.com" },
  { id: "23FE1A4258", name: "TALASILA DIVYA HARI PRAKASH", email: "hariprakashtalasila5@gmail.com" },
  { id: "23FE1A0545", name: "DASINENI HEMANTH", email: "hemanthdasineni6@gmail.com" },
  { id: "24FE5A6104", name: "MUTTE SAI RAJESH", email: "muttesairajesh@gmail.com" },
  { id: "23FE1A4462", name: "YALLAMATI SANNIDHI", email: "sannidhiyallamati462@gmail.com" },
  { id: "23FE1A05P1", name: "SHAIK SABIHA SULTANA", email: "shaiksabihasultana55@gmail.com" },
  { id: "23FE1A6157", name: "TATA LAKSHMI VENKATA GAYATHRI", email: "tatagayathri39@gmail.com" },
  { id: "24FE5A0524", name: "VAVILAPALLI TARUN KUMAR", email: "vavilapallitarun32@gmail.com" },
  { id: "23FE1A0489", name: "MANDULA MOUNIKA", email: "mounikamandula2005@gmail.com" },
  { id: "23FE1A4402", name: "AMISIGADDA KOHITHA", email: "amisigaddakohitha@gmail.com" },
  { id: "23FE1A4433", name: "MATURU LOKESH", email: "maturulokesh18@gmail.com" },
  { id: "23FE1A0518", name: "BHUPATHI NAGA LIKITH", email: "bnagalikith12@gmail.com" },
  { id: "23FE1A0561", name: "GANDIKOTA SACHIN", email: "gandikotasachin@gmail.com" },
  { id: "23FE1A05B0", name: "MADDINA SRAVANTHI", email: "sravanthimaddina42@gmail.com" },
  { id: "24FE5A4205", name: "SHAIK SAMEER", email: "shaiksameer3638@gmail.com" },
  { id: "23FE1A0519", name: "BIKKI SRINIVAS", email: "bikkisrinivas19@gmail.com" },
  { id: "23FE1A4412", name: "DANDEMPALLI SHRUTHI", email: "shruthidandempalli@gmail.com" },
  { id: "23FE1A4214", name: "DAGGUBATI DEEPTHI SAI", email: "deepthisaidaggubati@gmail.com" },
  { id: "23FE1A6109", name: "BODDU NARENDRA", email: "boddunarendra196@gmail.com" },
  { id: "23FE1A05O1", name: "YALLA VYSHNAVI", email: "yallavyshnavi@gmail.com" },
  { id: "23FE1A4401", name: "AKKALA SAI NARAYANA", email: "saiakkala2006@gmail.com" },
  { id: "23FE1A0536", name: "CHINTA MANASA", email: "chintamanasa294@gmail.com" },
  { id: "23FE1A0558", name: "GAJULAVARTHI KALYAN RAO", email: "kalyanrao135@gmail.com" },
  { id: "23FE1A05C4", name: "MATTUPALLI DEVI SRAVANI", email: "devisravanimattupalli@gmail.com" },
  { id: "24FE5A0516", name: "PADAMATI DALL SAI KEERTHI", email: "keerthipadamati50@gmail.com" },
  { id: "23FE1A6122", name: "JAKKA VASANTHIKA", email: "jvasanthika@gmail.com" },
  { id: "24FE5A4201", name: "ATLURI VENKATA SIVA REDDY", email: "venkatshiva823@gmail.com" },
  { id: "23FE1A05A9", name: "MACHARLA SOWMYA", email: "sowmyamacharla21@gmail.com" },
  { id: "23FE1A6118", name: "ENAGANTI FIROZ BABU", email: "babufiroz879@gmail.com" },
  { id: "23FE1A4403", name: "ANIMELLA KARTHIKEYA GIRINDRA", email: "animellakarthikeyagirindra@gmail.com" },
  { id: "23FE1A4430", name: "KURAPATI BHARGAVI", email: "kurapati608@gmail.com" },
  { id: "23FE1A4235", name: "MADDELA SIR JAMES YUVARAJU", email: "jamesyuvaraj27@gmail.com" },
  { id: "23FE1A0480", name: "KROVI LAXMI NAGA SRAVANI", email: "klnsravani06@gmail.com" },
  { id: "23FE1A6162", name: "YARLAGADDA NAGA SRUTHI", email: "sruthiyarlagadda988@gmail.com" },
  { id: "23FE1A1235", name: "NOORBASHA BAJI", email: "bajinoorbasha961@gmail.com" },
  { id: "23FE1A4221", name: "GARNEPUDI TEJASWI", email: "tejaswigarnepudi85@gmail.com" },
  { id: "23FE1A0503", name: "AKURATHI LEELAVENKATESH", email: "leelavenkateshakurathi@gmail.com" },
  { id: "23FE1A0538", name: "CHIRAKAALA VENKATA SAI MANIKANTA", email: "saimani0710@gmail.com" },
  { id: "23FE1A0496", name: "MOHAMMAD SANIYA", email: "mohammadsaira123@gmail.com" },
  { id: "23FE1A04A2", name: "NAGUMOTHU PRAGATHI", email: "pragathinagumothu5@gmail.com" },
  { id: "23FE1A6124", name: "KARA DIVYA SREELEKHA", email: "divyasreelekha777@gmail.com" },
  { id: "23FE1A05O4", name: "YARRA VIVEK", email: "vivekyarra567@gmail.com" },
  { id: "23FE1A1252", name: "SHAIK TABASSUM", email: "vignanlara1252@gmail.com" },
  { id: "23FE1A0460", name: "JAMPANI VAISHNAVI", email: "jampanivaishnavii@gmail.com" },
  { id: "23FE1A6150", name: "SHAIK AHMAD ALI", email: "shailkahamadali3773@gmail.com" },
  { id: "23FE1A6154", name: "SHAIK SAJIDA", email: "haiksajida7234@gmail.com" },
  { id: "23FE1A4406", name: "BANAVATH DEEPIKA BAI", email: "deepikabanavath.06@gmail.com" },
  { id: "23FE1A4440", name: "PENUGONDA DHARSHAN BABU", email: "dharshanpenugonda8374@gmail.com" },
  { id: "23FE1A0585", name: "KALLURI ROHITHA", email: "rohithakalluri79@gmail.com" },
  { id: "23FE1A05G6", name: "PALETI VENKATA MURALI KRISHNA", email: "pvmuralikrishna481141@gmail.com" },
  { id: "23FE1A1208", name: "BORA ARCHANA", email: "archanabora607@gmail.com" },
  { id: "24FE5A1202", name: "GUNTUR HARIKA", email: "harikaguntur22@gmail.com" },
  { id: "23FE1A6152", name: "SHAIK MUBEENA", email: "shaikmubeena.aiml@gmail.com" },
  { id: "23FE1A05I8", name: "PULAVARTHI VENKAT PRAKASH", email: "pvenky2005@gmail.com" },
  { id: "23FE1A05N3", name: "VALETI NARASIMHA NAIDU", email: "narasimha9383@gmail.com" },
  { id: "24FE5A1205", name: "NAGIREDDI ABHINAY", email: "abhinay891984@gmail.com" },
  { id: "23FE1A4254", name: "SHAIK TAMEEZ", email: "tameezshaik516@gmail.com" },
  { id: "23FE1A05A6", name: "KOTULA KUMAR MANIKANTA", email: "manikantakumar429@gmail.com" },
  { id: "23FE1A05K5", name: "SAYAMPU ANUSHA", email: "sayampuanusha@gmail.com" },
  { id: "23FE1A05K9", name: "SHAIK AYESHA FARHEEN", email: "ayeshu49555@gmail.com" },
  { id: "23FE1A0586", name: "KAMINENI NAGA HARINI", email: "kamineninagaharini2006@gmail.com" },
  { id: "23FE1A0482", name: "MADAMANCHI VIVEK", email: "madamanchivivek16@gmail.com" },
  { id: "23FE1A4463", name: "YASAM GEETHIKA", email: "geethikayasam2005@gmail.com" },
  { id: "23FE1A05A1", name: "KONDRU NAGESWARI", email: "kondrunageswari24@gmail.com" },
  { id: "24FE5A0513", name: "MENDU NAGA BHARGAVI", email: "nagabhargavimendunagabhargavi@gmail.com" },
  { id: "23FE1A6104", name: "BANDARU JAYA SAI SHANMUKH", email: "shanmukhbandaru.b@gmail.com" },
  { id: "23FE1A4458", name: "VELLANKI NAGA REVANTH", email: "vellankinagarevanth@gmail.com" },
  { id: "23FE1A4212", name: "CHINTHALACHERUVU VENKATA NARENDRA", email: "narendrareddych181@gmail.com" },
  { id: "23FE1A4219", name: "GALLA LAKSHMI PAVITHRA", email: "gallasaipavitra@gmail.com" },
  { id: "23FE1A4229", name: "KASUKURTHI SNEHA MADHURI", email: "snehhaa17@gmail.com" },
  { id: "23FE1A0573", name: "ISSARAPU TARUNA SRAVANTHI", email: "issarapusravanthi@gmail.com" },
  { id: "23FE1A0493", name: "MEDIKONDA MANASA RANI", email: "manasamedikonda22@gmail.com" },
  { id: "23FE1A6161", name: "VEMULURU DEVA RAJ", email: "vemulurudevaraj@gmail.com" },
  { id: "23FE1A0543", name: "DASARI MANJULA", email: "manjuladasari9286@gmail.com" },
  { id: "23FE1A1262", name: "V L SATYA SAI SUBRAMANYESWARI", email: "lakshmisatyasai385@gmail.com" },
  { id: "23FE1A4414", name: "EDIGA ASHOK", email: "ashokashokgoud462@gmail.com" },
  { id: "24FE5A0518", name: "SHAIK ARIF", email: "as0476220@gmail.com" },
  { id: "23FE1A4222", name: "GOGINENI SINDHURA DEVI", email: "sindhuradevi7@gmail.com" },
  { id: "23FE1A4260", name: "VALAPARLA LISA CHRISTINE", email: "lisachristinevalaparla@gmail.com" },
  { id: "24FE5A0517", name: "PAVULURI MADHAVI LATHA", email: "vyshupavuluri@gmail.com" },
  { id: "23FE1A1237", name: "PAGADALA ISHWARYA", email: "ishwaryapagadala131@gmail.com" },
  { id: "23FE1A6130", name: "LAVU NAGA DIVYA", email: "nagadivya0826@gmail.com" },
  { id: "24FE5A0519", name: "SHAIK JASMIN", email: "jasminshaik9703@gmail.com" },
  { id: "23FE1A05K0", name: "RUDRAPOGU CRISPY DONY", email: "crispydony0912@gmail.com" },
  { id: "23FE1A1221", name: "KALIKAYA VARSHINI", email: "kalikayavarshini99@gmail.com" },
  { id: "23FE1A4411", name: "CHITTIBOYINA SRI HARI PRANAV", email: "chittiboyinasriharipranav@gmail.com" },
  { id: "23FE1A4420", name: "JONNADULA GOWTHAM KUMAR", email: "gowthamkumarjonnadula@gmail.com" },
  { id: "23FE1A0479", name: "KOVVURU DAMAYANTHI", email: "damayanthiyanthi811@gmail.com" },
  { id: "23FE1A4410", name: "CHALLAGUNDLA MADHURI", email: "madhurichallagundla7@gmail.com" },
  { id: "23FE1A0534", name: "CHINNABATHINI RAVI TEJA", email: "ravitejachinnabathini7@gmail.com" },
  { id: "23FE1A0553", name: "ELURI VENKATESH", email: "nagarajueluri038@gmail.com" },
  { id: "23FE1A05C0", name: "MALLEPULA NAMRATHA", email: "mnamratha046@gmail.com" },
  { id: "23FE1A05I9", name: "PUVVADI KEERTHI", email: "keerthipuvvadi12@gmail.com" },
  { id: "23FE1A05E2", name: "MUNAGA BHAVANA", email: "munagabhavana.04@gmail.com" },
  { id: "23FE1A05N9", name: "VENNA SUMITHRA DEVI", email: "sumithradevivenna7@gmail.com" },
  { id: "23FE1A05G8", name: "PARVATHAREDDY POOJA", email: "appr.1320@gmail.com" },
  { id: "23FE1A05I2", name: "PONNURU JAYASRI", email: "jayasriponnur@gmail.com" },
  { id: "23FE1A05C8", name: "MIDDEY LEELA SAI", email: "middeysai25@gmail.com" },
  { id: "23FE1A05D5", name: "MOHAMMAD AYESHA", email: "mdayesha7863@gmail.com" },
  { id: "23FE1A0594", name: "KESIREDDY VENKATA GREESHMA REDDY", email: "kesireddygreeshma@gmail.com" },
  { id: "23FE1A05O5", name: "YARRAM SRI KEERTHI", email: "srikeerthiyarram@gmail.com" },
  { id: "23FE1A05N8", name: "VASIREDDY VIHARIKA", email: "viharikavasireddy07@gmail.com" },
  { id: "23FE1A05O8", name: "SATHULURI V S S KEERTHANA SARVANI", email: "sarvanisathuluri799@gmail.com" },
  { id: "24FE5A0521", name: "SIVARATRI VENKATARAMANA", email: "venkataramanasivaratri322@gmail.com" },
  { id: "23FE1A04H8", name: "VALLAMKONDA DHANYARA SRI LALITHA", email: "lalithasivavallamkonda@gmail.com" },
  { id: "23FE1A4351", name: "SHAIK SHAMEEM AKTHER", email: "shameem.shaik0501@gmail.com" },
  { id: "23FE1A4324", name: "KODURU JAGADEESH BABU", email: "kodurujagadeeshbabu77@gmail.com" },
  { id: "23FE1A4350", name: "SHAIK.NAZEER", email: "sknazeer9398850146@gmail.com" },
  { id: "23FE1A04F2", name: "SINGAMSETTY KOWSHIK", email: "kowshik2866@gmail.com" },
  { id: "23FE1A05B4", name: "MADINI MNV SAI SIDDHARTHA", email: "siddharthmadini2811@gmail.com" },
  { id: "23FE1A0556", name: "GADIBIDI ALEKHYA", email: "gadibidialekhya119@gmail.com" },
  { id: "23FE1A0533", name: "CHILAKA PRAVEEN KUMAR", email: "chilakapraveen2005@gmail.com" },
  { id: "23FE1A0424", name: "BYREDDY SUDHEER REDDY", email: "reddy19sudheer@gmail.com" },
  { id: "24FE5A0523", name: "UPPU PRAVALLIKA", email: "pravallikauppu1128@gmail.com" },
  { id: "23FE1A04E6", name: "SHAIK MEHATHAZ", email: "mehatahazshaik@gmail.com" },
  { id: "23FE1A4216", name: "EEDE NIKHILA", email: "nikhilaeede@gmail.com" },
  { id: "23FE1A1243", name: "Potla Vasavi Durga", email: "vasavidurgapotla@gmail.com" },
  { id: "23FE1A1240", name: "Podili Sri Sai Latha", email: "podhilisrisailatha@gmail.com" },
  { id: "23FE1A04G7", name: "TURLAPATI TORAJA ANAGHA SRINIDHI", email: "anaghasrinidhiturlapati@gmail.com" },
  { id: "23FE1A4328", name: "KUNCHALA SRINADH", email: "srinadkunchala@gmail.com" },
  { id: "23FE1A4257", name: "SIVANI MENDU", email: "sivaani237@gmail.com" },
  { id: "23FE1A4255", name: "SIMHADRI VEERA VENKATA LAKSHMI GOWRI", email: "gowrisimhadri10@gmail.com" },
  { id: "23FE1A4220", name: "GANTA VENNELA", email: "vennelaganta356@gmail.com" },
  { id: "23FE1A4353", name: "SYED SAJIDA SULTHANA", email: "sajidasyed83828@gmail.com" },
  { id: "80", name: "Veerababu", email: "veerababu@gmail.com" },
  { id: "23FE1A0401", name: "AARUMALLA SRIJA", email: "srijaaarumalla@gmail.com" },
  { id: "23FE1A0402", name: "ABU FAISAL SHAIK", email: "faisalshaik3105@gmail.com" },
  { id: "23FE1A0403", name: "AKKALA YOSHITA", email: "akkalayoshita@gmail.com" },
  { id: "23FE1A0404", name: "ANDRA DIVYA", email: "andradivya24@gmail.com" },
  { id: "23FE1A0405", name: "ANKAM DEEPIKA", email: "ankamkavya2@gmail.com" },
  { id: "23FE1A0406", name: "ANNAM NIHARIKA", email: "a.niharika414@gmail.com" },
  { id: "23FE1A0407", name: "ARE SERENA", email: "areserena9@gmail.com" },
  { id: "23FE1A0408", name: "BAIREDDY VENKATA SIVA MAHANANDI REDDY", email: "baireddymahanandireddy@gmail.com" },
  { id: "23FE1A0409", name: "BELLAPU SIVA PHANI HARSHINI", email: "harshinisam49@gmail.com" },
  { id: "23FE1A0410", name: "BALLEMKONDA RAJYA LAKSHMI", email: "rajyalakshmi7817@gmail.com" },
  { id: "23FE1A0411", name: "BANAVATHU DURGA PRASAD NAIK", email: "durgaprasadnaikbanavathu@gmail.com" },
  { id: "23FE1A0412", name: "BANDARI LAVANYA", email: "bandarulavanya04@gmail.com" },
  { id: "23FE1A0413", name: "BATTULA MOUNIKA", email: "mounikabattula01@gmail.com" },
  { id: "23FE1A0414", name: "BELLAMKONDA KUMAR KOTIVEERA VENKATA GOPI", email: "gopikumar9652@gmail.com" },
  { id: "23FE1A0415", name: "BHAVANAM SAMBI REDDY", email: "bhavanamsambireddy05@gmail.com" },
  { id: "23FE1A0416", name: "BHIMAVARAPU BHARATI CHANDRIKA", email: "bharatichandrika3@gmail.com" },
  { id: "23FE1A0417", name: "BHUPATHI ROHITH BABU", email: "brohithbabu2005@gmail.com" },
  { id: "23FE1A0418", name: "BHUVANAGIRI KEERTHIKA", email: "keerthikabhuvanagiri8@gmail.com" },
  { id: "23FE1A0419", name: "BHUVANAGIRI VENKATESH", email: "bhuvanagirivenkatesh81@gmail.com" },
  { id: "23FE1A0420", name: "AMPALAM ESWAR CHANDRA VIDYA SAGAR", email: "aecvsagar5@gmail.com" },
  { id: "23FE1A0421", name: "BODDU SRI VIDYA", email: "srividyachowdary3333@gmail.com" },
  { id: "23FE1A0422", name: "BONTHU SUMASRI", email: "bonthusumasri@gmail.com" },
  { id: "23FE1A0423", name: "BURRA RATNA MOHAN", email: "burraratnamohan@gmail.com" },
  { id: "23FE1A0425", name: "CHALAVADI HEMA HARSHINI", email: "chalavadihemaharshini@gmail.com" },
  { id: "23FE1A0426", name: "CHALLAGUNDLA SAI SANJAY", email: "sanjaychallagundla6@gmail.com" },
  { id: "23FE1A0427", name: "CHEBROLU KIRAN KUMAR", email: "kirankumarchebrolu97@gmail.com" },
  { id: "23FE1A0428", name: "CHENNU SUBRAMANYAM", email: "venkatchennu09@gmail.com" },
  { id: "23FE1A0429", name: "BILLALA JAYASRI", email: "billalajayasri@gmail.com" },
  { id: "23FE1A0430", name: "CHIRUKURI RAGHU CHANDU", email: "chirukuriraghuchandu@gmail.com" },
  { id: "23FE1A0431", name: "DANDA HIMA BINDU", email: "bindudanda284@gmail.com" },
  { id: "23FE1A0432", name: "GUJJULA SRINADH REDDY", email: "Srinadhrdy9@gmail.com" },
  { id: "23FE1A0433", name: "DASARI PRAHARSHINI", email: "praharshinidasari@gmail.com" },
  { id: "23FE1A0434", name: "DASARI VENKATA LAKSHMI", email: "2006venkatalakshmi@gmail.com" },
  { id: "23FE1A0435", name: "DAVILI PAVAN KUMAR", email: "pavankumardavili@gmail.com" },
  { id: "23FE1A0436", name: "DEVARAKONDA SOWJANYA", email: "sowjanyadevarakonda90@gmail.com" },
  { id: "23FE1A0438", name: "DODDAKA GAYATHRI", email: "doddakagayathri6@gmail.com" },
  { id: "23FE1A0439", name: "DODDI VENKATA PRABHAS", email: "venkataprabhasdoddi@gmail.com" },
  { id: "23FE1A0441", name: "DOSAKAYALA VENKATA SIVA REDDY", email: "sr8523520@gmail.com" },
  { id: "23FE1A0442", name: "DUDEKULA NAGURBEE", email: "dudekulanagurbeer@gmail.com" },
  { id: "23FE1A0445", name: "EPURU LAKSHMI", email: "lakshmiepuru351@gmail.com" },
  { id: "23FE1A0446", name: "ERUGULA RAJESH", email: "erugularajesh775@gmail.com" },
  { id: "23FE1A0447", name: "GADIPARTHI LAVANYA", email: "gadiparthilavanya151106@gmail.com" },
  { id: "23FE1A0448", name: "GANDIKOTA TIRUMULA VAISHNAVI", email: "vtirumala299@gmail.com" },
  { id: "23FE1A0449", name: "GELLI NEELIMA", email: "gneelima877@gmail.com" },
  { id: "23FE1A0450", name: "GOKAVARAPU SARANYA", email: "saranya24106@gmail.com" },
  { id: "23FE1A0451", name: "GOLLU SRIJA", email: "gollusrija@gmail.com" },
  { id: "23FE1A0452", name: "GOPISETTI BALA YAMUNA", email: "balayamuna8@gmail.com" },
  { id: "23FE1A0453", name: "GORANTLA GEETHA MADHURI", email: "geetha.g2811@gmail.com" },
  { id: "23FE1A0454", name: "GUDIMITLA JOSEPH SIRIL", email: "josephsiril68@gmail.com" },
  { id: "23FE1A0455", name: "GUNTURU MADHU LATHA", email: "madhulathagunturu01@gmail.com" },
  { id: "23FE1A0456", name: "GURINDAPALLI BHANU SRI", email: "gurindapallibhanusri@gmail.com" },
  { id: "23FE1A0457", name: "ILLURI SANJAY VARMA", email: "sanjay.varma.illuri@gmail.com" },
  { id: "23FE1A0458", name: "JAGARAPU PRABASH", email: "prabashjagarapuprabash@gmail.com" },
  { id: "23FE1A0459", name: "JAMPANI NITHIN", email: "nithinjampani@gmail.com" },
  { id: "23FE1A0461", name: "JETTY NAGENDRA PAVANI", email: "nagendrapavanijetty@gmail.com" },
  { id: "23FE1A0462", name: "JONNALAGADDA BALAJI", email: "jbalaji200505@gmail.com" },
  { id: "23FE1A0463", name: "JULAKANTI NAVYA", email: "navya965246@gmail.com" },
  { id: "23FE1A0464", name: "JYOTHI VAISHNAVI REDDY", email: "v9793392@gmail.com" },
  { id: "23FE1A0465", name: "KADAPA MOHANA PRIYA", email: "priyakadapa7@gmail.com" },
  { id: "23FE1A0466", name: "KADAVAKOLLU SURESH BABU", email: "sureshbabukadavakollu@gmail.com" },
  { id: "23FE1A0467", name: "KADIYAM GURU CHARAN", email: "gckadiyam67@gmail.com" },
  { id: "23FE1A0469", name: "KANDULA DEEKSHITHA", email: "kanduladeekshitha467@gmail.com" },
  { id: "23FE1A0470", name: "KASARANENI PRAVALLIKA", email: "Kasaraneni.pravallika808@gmail.com" },
  { id: "23FE1A0471", name: "KODEDASU ALEKHYA", email: "alekhyakodedasu@gmail.com" },
  { id: "23FE1A0472", name: "KOLLURI VINAY", email: "vinaykolluri43@gmail.com" },
  { id: "23FE1A0473", name: "KOLLURU GANESH", email: "kolluruganesh98@gmail.com" },
  { id: "23FE1A0474", name: "KOLLURU SIREESHA", email: "sireeshakolluru03@gmail.com" },
  { id: "23FE1A0475", name: "KONDAMUDI OLIVA GOSPEL", email: "olivagospelkondamudi@gmail.com" },
  { id: "23FE1A0476", name: "KOPPARAPU SAI TEJA", email: "saitejakopparapu44@gmail.com" },
  { id: "23FE1A0477", name: "KORLAKUNTA RUSHITHA", email: "korlakuntarushitha1@gmail.com" },
  { id: "23FE1A0478", name: "KOTU VAMSI KRISHNA", email: "vamsikotu6@gmail.com" },
  { id: "23FE1A0481", name: "LANKA NAGA LAKSHMI BALA SRI NITHYA", email: "lnlb.srinithya@gmail.com" },
  { id: "23FE1A0483", name: "KONDETI VENKATA SAI VAISHNAVI", email: "7013139215kvsv@gmail.com" },
  { id: "23FE1A0484", name: "MAILA GANESH", email: "ganeshyadav951544@gmail.com" },
  { id: "23FE1A0485", name: "MALAPATI VEERA VENKATA NARASIMHA NAIDU", email: "veeramalapati24@gmail.com" },
  { id: "23FE1A0487", name: "MAMIDI NEELRAJ", email: "luckymamidi8@gmail.com" },
  { id: "23FE1A0488", name: "MANDADHI AKHIL SAI", email: "akhilmandadhi@gmail.com" },
  { id: "23FE1A0490", name: "MANNEM MANOHAR REDDY", email: "mannemmanohar2004@gmail.com" },
  { id: "23FE1A0492", name: "MASANAM BALA SAI KUMAR", email: "masanamsaikumar1998@gmail.com" },
  { id: "23FE1A0494", name: "MIRIYALA THIRUMALA", email: "miriyalatirumala15@gmail.com" },
  { id: "23FE1A0495", name: "MOGALIPUVVU CHARAN SIVA SAI", email: "charanmogalipuvvu@gmail.com" },
  { id: "23FE1A0497", name: "MOLLI DAMODHARARAO", email: "dhamodhrarao.molli1@gmail.com" },
  { id: "23FE1A0498", name: "MUKIRI CHANDRIKA", email: "chandrikamukiri@gmail.com" },
  { id: "23FE1A0499", name: "MURAMUTLA VAMSI KRISHNA", email: "vk.muramutla@gmail.com" },
  { id: "23FE1A04A0", name: "MUVVA MANIKANTA GNANESWAR", email: "muvvachinnu07@gmail.com" },
  { id: "23FE1A04A1", name: "NAGA LAKSHMI GERA", email: "geranagalakshmi2020@gmail.com" },
  { id: "23FE1A04A4", name: "NANDURI GOWTHAM", email: "gowthamnanduri779@gmail.com" },
  { id: "23FE1A04A5", name: "NEELAM ANJALI", email: "neelamanjali43@gmail.com" },
  { id: "23FE1A04A7", name: "NULU SAI NAGENDRA", email: "sainagendra.n1359@gmail.com" },
  { id: "23FE1A04A8", name: "PACCHAVA NAGA LAKSHMI KRANTHIKA DEVI", email: "pacchavakranthika2485@gmail.com" },
  { id: "23FE1A04A9", name: "PALAPARTHI PRAVEEN", email: "praveenpalaparthi81@gamil.com" },
  { id: "23FE1A04B0", name: "PALAPARTHI SHARMILA", email: "palaparthisharmila97@gmail.com" },
  { id: "23FE1A04B1", name: "PANE SATHVIKA", email: "sathvikapane1919@gmail.com" },
  { id: "23FE1A04B2", name: "PANUGANTI BAJI", email: "panugantibaji605" },
  { id: "23FE1A04B3", name: "PASAM ANIL KUMAR", email: "pasamanilkumar01@gmail.com" },
  { id: "23FE1A04B4", name: "PASAM NAVYA", email: "pasamnavyareddy@gmail.com" },
  { id: "23FE1A04B5", name: "PASUPULA UDAY KIRAN", email: "udaykiranpasupula8978@gmail.com" },
  { id: "23FE1A04B6", name: "PATHA SATHVIKA", email: "sathvikapatha31@gmail.com" },
  { id: "23FE1A04B7", name: "PATTA MOUNIKA", email: "mounikapatta811@gmail.com" },
  { id: "23FE1A04B8", name: "PEDAPUDI YASWANTH", email: "yaswanthyashpeddapudi@gmail.com" },
  { id: "23FE1A04B9", name: "PENUMALA AKHIL", email: "penumalaakhil5@gmail.com" },
  { id: "23FE1A04C0", name: "PENUMALA SRINIVAS", email: "srinupenumala71@gmail.com" },
  { id: "23FE1A04C1", name: "PESANAGANTI DHANUSH", email: "Pesanagantidanush@gmail.com" },
  { id: "23FE1A04C2", name: "PILLI JYOTHI", email: "pillijyothi37@gmail.com" },
  { id: "23FE1A04C3", name: "PODILLA PREMKUMAR", email: "podillasiddu@gmail.com" },
  { id: "23FE1A04C4", name: "POKALA BHUVANA NAGALAKSHMI", email: "pokalabhuvananaidu123@gmail.com" },
  { id: "23FE1A04C5", name: "TADIKONDA TARUN", email: "dhanviktarun@gmail.com" },
  { id: "23FE1A04C6", name: "POLANATI BALAJI SANDEEP", email: "sandeepbalaji455@gmail.com" },
  { id: "23FE1A04C7", name: "POLISETTY SRIVALLI", email: "polisettysrivalli2005@gmail.com" },
  { id: "23FE1A04C8", name: "POTHURAJU LOKESWARI DEVI", email: "lokeswaripothuraju94@gmail.com" },
  { id: "23FE1A04C9", name: "PRATHIPATI HARINI", email: "prathipatiharini02@gmail.com" },
  { id: "23FE1A04D0", name: "RAMIREDDY GAARI RENUKA", email: "ramireddygaarirenuka@gmail.com" },
  { id: "23FE1A04D1", name: "RATHIKRINDA RAMYASRI", email: "ramyasrirathikrinda@gmail.com" },
  { id: "23FE1A04D2", name: "RAVULAPALLI SRI LAKSHMI DURGA", email: "lakshmiravulpalli01@gmail.com" },
  { id: "23FE1A04D3", name: "RAVURI HARINI", email: "ravuriharini1@gmail.com" },
  { id: "23FE1A04D4", name: "RAYANA VENKATA GOPAL", email: "rayanavenkatagopal@gmail.com" },
  { id: "23FE1A04D5", name: "RAYUDU PRUDHVI", email: "gnanaprasunarayudu@gmail.com" },
  { id: "23FE1A04D6", name: "VALIVETI VIJAY BABU", email: "vijaybabuvaliveti@gmail.com" },
  { id: "23FE1A04D7", name: "SAMPANGI NARESH", email: "nareshsampangi69@gmail.com" },
  { id: "23FE1A04D8", name: "SEERA DONI", email: "doniseera@gmail.com" },
  { id: "23FE1A04D9", name: "SENU MADHU", email: "senumadhu123@gmail.com" },
  { id: "23FE1A04E0", name: "SHAIK ABDUL SAMAD", email: "shaikabdulsamad832@gmail.com" },
  { id: "23FE1A04E1", name: "SHAIK ALIFA", email: "alifashaik188@gmail.com" },
  { id: "23FE1A04E2", name: "SHAIK CHANDINI SHAHISTA", email: "chandinishahista@gmail.com" },
  { id: "23FE1A04E3", name: "SHAIK IFRA SHIREEN", email: "ifra3959@gmail.com" },
  { id: "23FE1A04E4", name: "SHAIK JAVEED", email: "sksjvjaveed786v@gmail.com" },
  { id: "23FE1A04E5", name: "SHAIK KHAJA MOHIDDIN", email: "mohiddinshaik716@gmail.com" },
  { id: "23FE1A04E7", name: "SHAIK MOHAMMAD RAFI", email: "rafiskmohammad679@gmail.com" },
  { id: "23FE1A04E8", name: "SHAIK MYMUNISHA", email: "mymunishashaik81@gmail.com" },
  { id: "23FE1A04E9", name: "SHAIK NISHAD", email: "mahabunishad1314@gmail.com" },
  { id: "23FE1A04F0", name: "SHAIK SAMDHANI", email: "shaiksamdhani6617@gmail.com" },
  { id: "23FE1A04F1", name: "SHAIK ZIYAD", email: "bakshishaik576@gmail.com" },
  { id: "23FE1A04F3", name: "SONTI SIVA KRISHNA", email: "sontisivakrishna279@gmail.com" },
  { id: "23FE1A04F4", name: "SUNKARA KALYAN DURGA REDDY", email: "kalyandurgareddy@gmail.com" },
  { id: "23FE1A04F6", name: "TALASILA VAMSI KRISHNA", email: "talasilavamsikrishna5@gmail.com" },
  { id: "23FE1A04F7", name: "TAMMINENI LAKSHMI", email: "lakshmitammineni44@gmail.com" },
  { id: "23FE1A04F8", name: "TAMMISETTY SRIRAMA CHANDRA VARMA", email: "sriramcv2772@gmail.com" },
  { id: "23FE1A04F9", name: "TANNIRU AJAY KUMAR", email: "ajayk12128@gmail.com" },
  { id: "23FE1A04G0", name: "TASLIM FIRDOS", email: "taslimabdul73@gmail.com" },
  { id: "23FE1A04G1", name: "TATIKONDA VEERALAKSHMI", email: "veeralakshmiyadav27@gmail.com" },
  { id: "23FE1A04G2", name: "SHAIK HASSAIN AHMAD", email: "shaikhassain99856@gmail.com" },
  { id: "23FE1A04G3", name: "THOKALA VARDHAN", email: "vardhanthokala7@gmail.com" },
  { id: "23FE1A04G4", name: "THOTA KARTHIK", email: "karthikthota233@gmail.com" },
  { id: "23FE1A04G5", name: "THOTA PUJITHA", email: "poojithota033@gmail.com" },
  { id: "23FE1A04G6", name: "TULLURU RAVI VARDHAN", email: "vardhanravi22@gmail.com" },
  { id: "23FE1A04G8", name: "UBBARAPU VENKATA VIVEK", email: "marriboinavijay@gmail.com" },
  { id: "23FE1A04G9", name: "ULLANGULA GOPICHAND", email: "gopichand0348@gmail. com" },
  { id: "23FE1A04H0", name: "UPPALA MAHESH PAVAN KUMAR", email: "maheshuppala420@gmail.com" },
  { id: "23FE1A04H2", name: "USARTHI HEMANTH VENKATA SAMBA SIVA RAO", email: "babyboyhemanth@gmail.com" },
  { id: "23FE1A04H3", name: "UTUKURI NAGA LAKSHMI", email: "nagalakshmiutukuri53@gmail.com" },
  { id: "23FE1A04H5", name: "VAKKALAGADDA UMESHSAI", email: "umesh275.v@gmail.com" },
  { id: "23FE1A04H6", name: "VALAPARLA MEGHANA", email: "valaparlameghana5@gmail.com" },
  { id: "23FE1A04H7", name: "VALAPARLA RAMU", email: "ramuvalaparla2005@gmail.com" },
  { id: "23FE1A04H9", name: "VALLAMREDDY JOHN KISHAN REDDY", email: "vallamreddyjohnkishan2005@gmail.com" },
  { id: "23FE1A04I0", name: "VALLURI ABHIRAM", email: "valluri8123@gmail.com" },
  { id: "23FE1A04I1", name: "VALLURI ANANTHA KUMAR", email: "ananthakumar9505@gmail.com" },
  { id: "23FE1A04I2", name: "VANAMALA DEEPIKA", email: "deepika.vanamala23@gmail.com" },
  { id: "23FE1A04I3", name: "VEERISETTY NAGA BINDU PRIYA", email: "priyaveerisetty@gmail.com" },
  { id: "23FE1A04I4", name: "VEJANDLA DURGESWARI", email: "durgeswari023@gmail.com" },
  { id: "23FE1A04I5", name: "VELPURI SAI ROHITHA", email: "velpurisairohitha@gmail.com" },
  { id: "23FE1A04I6", name: "VELURU LAKSHMI PRASANNA", email: "velurulakshmiprasanna71@gmail.com" },
  { id: "23FE1A04I7", name: "VUTTI VENKATA MEGHANATH", email: "meghanath2525@gmail.com" },
  { id: "23FE1A04I8", name: "YALAVARTHI MOHAN SAI", email: "ymohansai29@gmail.com" },
  { id: "23FE1A04I9", name: "YANGALASETTY VAMSI", email: "yangalasettyvamsi1202@gmail.com" },
  { id: "23FE1A04J0", name: "YARLAGADDA MAHENDRA VARMA", email: "ymahendra2005@gmail.com" },
  { id: "23FE1A04J1", name: "YARRAGUNTLA DAVID RAJU", email: "yarraguntladavid134@gmail.com" },
  { id: "23FE1A04J2", name: "KARUMURI TEJA", email: "karumuriteja87@gmail.com" },
  { id: "23FE1A04J3", name: "SWARNA MAHA LAKSHMI", email: "Swarnamahalakshmi08@gmail.com" },
  { id: "23FE1A04J4", name: "POTTAPATI JASWANTH", email: "jaswanthpottapati@gmail.com" },
  { id: "23FE1A0501", name: "ADDAGIRI PRASANNA", email: "prasannaaddagiri21@gmail.com" },
  { id: "23FE1A0502", name: "AFREEN JAHAN", email: "jahanafreen514@gmail.com" },
  { id: "23FE1A0504", name: "ALIKEPALLI SISINDAR REDDY", email: "sisindarreddy49@gmai.com" },
  { id: "23FE1A0505", name: "ALLA SAI PRANATHI", email: "saipranathi250805@gmail.com" },
  { id: "23FE1A0506", name: "AMARA SRI LAKSHMI GOWRI", email: "amaragowri2665@gmail.com" },
  { id: "23FE1A0507", name: "ANKALU LAVANYA", email: "lavanyaankala8@gmail.com" },
  { id: "23FE1A0508", name: "ARIKATLA VENKATA NAVYA SRI", email: "navyasrivenkata084@gmail.com" },
  { id: "23FE1A0509", name: "BADUGU HEMA", email: "hemabadugu13@gmail.com" },
  { id: "23FE1A0510", name: "BANAVATH SURESH NAIK", email: "sureshbanavath2006@gmail.com" },
  { id: "23FE1A0511", name: "BANDI VENKATA KRISHNA REDDY", email: "krishnareddyb061@gmail.com" },
  { id: "23FE1A0512", name: "BAREDDY NARENDRA REDDY", email: "bareddynarendhrareddy555@gmail.com" },
  { id: "23FE1A0513", name: "BATHULA SRINITHA", email: "bathulasrinitha343@gmail.com" },
  { id: "23FE1A0514", name: "BATTU THARUN SAI", email: "battutharun98@gmail.com" },
  { id: "23FE1A0515", name: "BETHA SAILU", email: "sailubetha8@gmail.com" },
  { id: "23FE1A0517", name: "BHUNAM VYSHNAVI", email: "vyshnavibhunam@gmail.com" },
  { id: "23FE1A0521", name: "BONTHU HEMALATHA", email: "hemalathabonthu78@gmail.com" },
  { id: "23FE1A0522", name: "BORRU GAYATRI", email: "gayatriborru@gmail.com" },
  { id: "23FE1A0523", name: "BUDDIGA ABHIRAM", email: "abhirambuddiga@gmail.com" },
  { id: "23FE1A0524", name: "CHALUMURI GOPIKA", email: "chgopika421@gmail.com" },
  { id: "23FE1A0527", name: "CHAPPIDI UMA HARINI", email: "umaharinichappidi@gmail.com" },
  { id: "23FE1A0528", name: "CHAVALI VARSHITHA", email: "varshithachavali96@gmail.com" },
  { id: "23FE1A0529", name: "CHAVAPATI JASMIN", email: "jasminchavapati12@gmail.com" },
  { id: "23FE1A0530", name: "CHENNUPATI NAGABHAVYASRI", email: "chennupatinagabhavyasri@gmail.com" },
  { id: "23FE1A0531", name: "CHERUKURI MEGHANA SAI", email: "meghanasaicherukuri@gmail.com" },
  { id: "23FE1A0532", name: "CHIGILIPALLI VENKATESH", email: "chigilipallivenkatesh4@gmail.com" },
  { id: "23FE1A0537", name: "CHIPPALA MADHU", email: "madhuchippala17@gmail.com" },
  { id: "23FE1A0539", name: "CHIRAKALA HARITHA", email: "harithachirakala@gmail.com" },
  { id: "23FE1A0540", name: "DAGGUBATI GAYATRI", email: "gayatridaggubati1306@gmail.com" },
  { id: "23FE1A0541", name: "DAMMALAPA SAI NAGALALITHA", email: "sainagalalitha17@gmail.com" },
  { id: "23FE1A0542", name: "DASARI GOUTHAM SAI TEJA", email: "gowthamdasari6@gmail.com" },
  { id: "23FE1A0544", name: "DASARI NANI", email: "nanidasari305@gmail.com" },
  { id: "23FE1A0546", name: "DAVULURI SRI LAKSHMI GANESWARAMMA", email: "srilakshmiganeswarammadavuluri@gmail.com" },
  { id: "23FE1A0547", name: "DEVARAKONDA ROHITHA", email: "rohithadevarakonda39@gmail.com" },
  { id: "23FE1A0548", name: "DEVAVARAPU MYDHILI", email: "devavarapu2005@gmail.com" },
  { id: "23FE1A0549", name: "DODDA RAJU", email: "rajudodda72@gmail.com" },
  { id: "23FE1A0550", name: "DODDAPANENI CHANDRA VENKATA KRISHNA", email: "chandudoddapaneni6@gmail.com" },
  { id: "23FE1A0551", name: "DODDAPANENI MADHU SOWMYA", email: "doddapanenimadhusowmya@gmail.com" },
  { id: "23FE1A0554", name: "EMANI HARIKA", email: "emaniharikareddy@gmail.com" },
  { id: "23FE1A0555", name: "ERLA RADHA", email: "radhaerla64@gmail.com" },
  { id: "23FE1A0557", name: "GADIDAMALLA BHANU RASOOL", email: "bhanurasoolgadidamalla@gmail.com" },
  { id: "23FE1A0559", name: "GALI HASINI", email: "hasinigali21@gmail.com" },
  { id: "23FE1A0562", name: "GARIKAPATI POOJITHA", email: "poojithagarikapati2303@gmail.com" },
  { id: "23FE1A0563", name: "GEDDA KUNJANA SAI HARINI", email: "kunjanagedda@gmail.com" },
  { id: "23FE1A0564", name: "GIDUTHURI MAHA SUDHARSHAN", email: "giduthurimaha@gmail.com" },
  { id: "23FE1A0565", name: "GOLI MOHANA KRISHNA PHANI SAI KUMAR", email: "gmkphanisaikumar2006@gmail.com" },
  { id: "23FE1A0566", name: "GOLLA PRAVALLIKA", email: "gollapravallika4466@gmail.com" },
  { id: "23FE1A0567", name: "GORIPARTHI NAGA HARINI", email: "harinigoriparthi@gmail.com" },
  { id: "23FE1A0568", name: "GORLI KUSHVANTH SAI TEJA", email: "saitejagorli0806@gmail.com" },
  { id: "23FE1A0569", name: "GOTTAM ABHISHEK", email: "gottam.abhishek2006@gmail.com" },
  { id: "23FE1A0570", name: "GUDIPUDI SANJANA", email: "sanjugudipudi@gmail.com" },
  { id: "23FE1A0571", name: "GUMMADI SRUTHI", email: "gummadisruthi63@gmail.com" },
  { id: "23FE1A0572", name: "IRA PREM KUMAR", email: "iraprem50@gmail.com" },
  { id: "23FE1A0574", name: "JAKKULA DEEPIKA", email: "deepikajakkula8@gmail.com" },
  { id: "23FE1A0575", name: "JALE SWAPNA", email: "jaleswapna755@gmail.com" },
  { id: "23FE1A0576", name: "JAMMULA SRI MANIKANTA", email: "srimanikantajammula@gmail.com" },
  { id: "23FE1A0577", name: "JATOTH MUNI NAIK", email: "muninaikjatoth@gmail.com" },
  { id: "23FE1A0578", name: "JAVVAJI DIVYA", email: "javvajidivya333@gmail.com" },
  { id: "23FE1A0579", name: "JONNADULA LIKHITHA", email: "jonnadulalikhitha86@gmail.com" },
  { id: "23FE1A0580", name: "JULAKANTI SMILE", email: "smileyjulakanti@gmail.com" },
  { id: "23FE1A0581", name: "KAKI AVINASH", email: "captainavi001@gmail.com" },
  { id: "23FE1A0582", name: "KAKUMANU YOHAN", email: "yohan01082005@gmail.com" },
  { id: "23FE1A0583", name: "KALAGOTLA RAPHICK", email: "raffickalagotla13@gmail.com" },
  { id: "23FE1A0584", name: "KALAVAKOLLU KISHORE", email: "kishorekalavakollu18@gmail.com" },
  { id: "23FE1A0587", name: "KANAGALA RAJESH", email: "kanagalarajesh88@gmail.com" },
  { id: "23FE1A0589", name: "KARNI PUJITHA", email: "karnipujitha@gmail.com" },
  { id: "23FE1A0590", name: "KARUMURI DEVI", email: "devikarumuri56@gmail.com" },
  { id: "23FE1A0591", name: "KASIBISI VENKATA NAGA SUNITHA", email: "kasibisisunitha9@gmail.com" },
  { id: "23FE1A0592", name: "KATTA MEGHANA", email: "kattameghana28@gmail.com" },
  { id: "23FE1A0593", name: "KAVURI VENKATA SIVA REDDY", email: "chintukavuri18@gmail.com" },
  { id: "23FE1A0595", name: "KODAKANDLA VENKATA SESHA AKSHAY", email: "akshay246908@gmail.com" },
  { id: "23FE1A0596", name: "KOJJA PUJITHA", email: "pujithakojja@gmail.com" },
  { id: "23FE1A0597", name: "KOMMU ANUSHA", email: "anushakommu0311@gmail.com" },
  { id: "23FE1A0598", name: "KONAKANCHI NAVEEN SAI", email: "saikonakanchin@gmail.com" },
  { id: "23FE1A0599", name: "KONDA LOKESH", email: "kondalokesh2005@gmail.com" },
  { id: "23FE1A05A0", name: "KONDETI VIJAY KUMAR", email: "kondetivijay79@gmail.com" },
  { id: "23FE1A05A2", name: "KONIKI ANKAMMA RAO", email: "konikiankammarao@gmail.com" },
  { id: "23FE1A05A3", name: "KONIKI VENKAT", email: "konikivenkat438@gmail.com" },
  { id: "23FE1A05A4", name: "KOPPULA VAMSI", email: "kvamsi1126@gmail.com" },
  { id: "23FE1A05A5", name: "KOTA HARIKA", email: "kotaharika527@gmail.com" },
  { id: "23FE1A05A7", name: "KUDA BALAJI", email: "kudabalaji18@gmail.com" },
  { id: "23FE1A05B1", name: "MADDINENI CHINNIKRISHNA BALAJI", email: "balajimaddineni231@gmail.com" },
  { id: "23FE1A05B2", name: "MADDULA MANASA", email: "maddulamanasa485@gmail.com" },
  { id: "23FE1A05B3", name: "MADEM VENKATA GOPICHAND", email: "venkatagopichandmadem@gmaill.com" },
  { id: "23FE1A05B5", name: "MADITHATI INDUJA", email: "madithatiinduja@gmail.com" },
  { id: "23FE1A05B6", name: "MAGULURI SAI CHANDRAMOULI", email: "magulurisaichowdary143@gmail.com" },
  { id: "23FE1A05B7", name: "MAHAMMAD NAFEES AHAMAD", email: "mdnafeesahamad6@gmail.com" },
  { id: "23FE1A05B8", name: "MAHANTHI PRAVEEN", email: "mahanthipraveen77@gmail.com" },
  { id: "23FE1A05B9", name: "MALLAVARAPU SIVAPARVATHI", email: "sivaparvathimallavarapu226@gmail.com" },
  { id: "23FE1A05C1", name: "MAMIDI AKASH", email: "akashmamidi1229@gmail.com" },
  { id: "23FE1A05C2", name: "MANYAM JAGADEESWARI", email: "jagadeeswarimanyam19@gmail.com" },
  { id: "23FE1A05C5", name: "MEDARA AKASH", email: "akashmedhara@gmail.com" },
  { id: "23FE1A05C6", name: "MEKALA HARSHITH REDDY", email: "harshithreddymekala412@gmail.com" },
  { id: "23FE1A05C7", name: "MERUGUMALLA TANU SREE", email: "mtanu23804@gmail.com" },
  { id: "23FE1A05C9", name: "Mirza Mohammad Nazeeruddin", email: "mmnazeerelr@gmail.com" },
  { id: "23FE1A05D1", name: "MODUGULA YASASWINI", email: "yashumodugula@gmail.com" },
  { id: "23FE1A05D2", name: "MOGHAL ASHRAF BAIG", email: "moghalashraf7863@gmail.com" },
  { id: "23FE1A05D3", name: "MOGULLURI VENKATA MANOJ KUMAR", email: "manojkumarmogulluri08@gmail.com" },
  { id: "23FE1A05D4", name: "MOHAMMAD ANAS", email: "mohammadanas8921@gmail.com" },
  { id: "23FE1A05D7", name: "MOTUPALLI DEVENDRA BABU", email: "devendrababumotupalli@gmail.com" },
  { id: "23FE1A05D8", name: "MANDAPATI NISHMA", email: "nishmamandapati64@gmail.com" },
  { id: "23FE1A05D9", name: "MUDAVATHU NAGA LAKSHMI", email: "nagalakshmimudavath3108@gmail.com" },
  { id: "23FE1A05E0", name: "MULAKA ABHINAYASRI REDDY", email: "mulaka1289nayasrireddy@gmail.com" },
  { id: "23FE1A05E1", name: "MULLAPUDI TRISHA", email: "trishamullapudi@gmail.com" },
  { id: "23FE1A05E3", name: "MURALA NARENDRA", email: "narendramurala7@gmail.com" },
  { id: "23FE1A05E4", name: "MUSALA JAYAHARSHINI", email: "jayaharshini1527@gmail.com" },
  { id: "23FE1A05E5", name: "NADIMINTI YOGENDRA KIREETI", email: "kireeti213@gmail.com" },
  { id: "23FE1A05E6", name: "NAKARIKANTI TANMAI SRI VISWA GAYATHRI", email: "ntsvgayathrii@gmail.com" },
  { id: "23FE1A05E7", name: "NAKKALA OM PRAKASH", email: "omprakash05e7@gmail.com" },
  { id: "23FE1A05E8", name: "NALLABOTHULA VAMSI KRISHNA", email: "vamsikrishnanallabothula01@gmail.com" },
  { id: "23FE1A05E9", name: "NANDAVARAPU NAGOOR MEERA VALI", email: "nnm29072006@gmail.com" },
  { id: "23FE1A05F0", name: "DEVARAKONDA DAYA SAGAR", email: "devarakondadaya@gmail.com" },
  { id: "23FE1A05F1", name: "NEKKALAPU KEZIA", email: "kezianekkalapu2005@gmail.com" },
  { id: "23FE1A05F2", name: "NELLURI SIVANNARAYANA", email: "nellurisivannarayana77@gmail.com" },
  { id: "23FE1A05F3", name: "NIKHIL JALLI", email: "nikhiljalli15@gmail.com" },
  { id: "23FE1A05F4", name: "NITLA BHAVANI", email: "nitlabhavani1432@gmail.com" },
  { id: "23FE1A05F5", name: "NIZAMPATNAM BALAJI SAI", email: "rockybalaji2005@gmail.com" },
  { id: "23FE1A05F6", name: "NUNSAVATHU SRI LAKSHMI SEVALSAI KUMAR NAIK", email: "saikumarnaik881@gmail.com" },
  { id: "23FE1A05F7", name: "ORSU LIKHITA PRIYA", email: "likithapriya2005@gmail.com" },
  { id: "23FE1A05F8", name: "ORUGANTI LAKSHMI MOUNIKA", email: "orugantilakshmimounika@gmail.com" },
  { id: "23FE1A05F9", name: "ORUGANTI NARASIMHA NAIDU", email: "orugantinarasimha156@gmail.com" },
  { id: "23FE1A05G0", name: "OSURI YASWANTH", email: "yaswanthosuri55@gmail.com" },
  { id: "23FE1A05G1", name: "P RAMPOORNA SAI", email: "prampoornasai@gmail.com" },
  { id: "23FE1A05G2", name: "PADALA PAVAN", email: "padalapavan1611@gmail.com" },
  { id: "23FE1A05G3", name: "PADAMATA SRAVANI", email: "sravanipadamata4@gmail.com" },
  { id: "23FE1A05G4", name: "PALAKALURI KOTESWARA RAO", email: "palakalurikoteswararao4@gmail.com" },
  { id: "23FE1A05G5", name: "PALAPARTHI SAILAJA", email: "sailajapalaparthi05@gmail.com" },
  { id: "23FE1A05G9", name: "PATHAN ANSAR KHAN", email: "ansarkhan260205@gmail.com" },
  { id: "23FE1A05H0", name: "PATHAN HABEEB KHAN", email: "khanphabeeb8@gmail.com" },
  { id: "23FE1A05H1", name: "PATTAN KHAJA", email: "Pkhajap768@gmail.com" },
  { id: "23FE1A05H2", name: "PEETHA PUJITHA", email: "pujithapeetha@gmail.com" },
  { id: "23FE1A05H3", name: "PERLI JESSY WESNEENA", email: "jessyperli04@gmail.com" },
  { id: "23FE1A05H4", name: "PERUSOMULA NAGA MANOJ", email: "nagamanoj2006@gmail.com" },
  { id: "23FE1A05H5", name: "PILLARI HINDU SREE", email: "pillarihindusree6@gmail.com" },
  { id: "23FE1A05H6", name: "PILLI SATISH BABU", email: "pillisatishbabu1810@gmail.com" },
  { id: "23FE1A05H7", name: "PITTU AKHILA", email: "pittuakhilareddy@gmail.com" },
  { id: "23FE1A05H8", name: "POLAVARAPU LOHITHA CHOWDARY", email: "lohithapolavarapu@gmail.com" },
  { id: "23FE1A05H9", name: "POLISETTI SUSMITHA", email: "susmithapolisetti16@gmail.com" },
  { id: "23FE1A05I0", name: "PONEGETI YARAMALA", email: "ponegetiyaramalareddy@gmail.com" },
  { id: "23FE1A05I1", name: "PONNAM VENKATESH", email: "venkateshponnam555@gmail.com" },
  { id: "23FE1A05I3", name: "POPURI SANIYA", email: "popurisaniya@gmail.com" },
  { id: "23FE1A05I4", name: "KARAKATLA GURUDUTTA", email: "guruduttakarakatla18@gmail.com" },
  { id: "23FE1A05I5", name: "PRATHIKODUPU CHAKRADHARA RAJU", email: "prathikodupuchakradhararaju@gmail.com" },
  { id: "23FE1A05I6", name: "PRATHIPATI GOWTHAM SAI", email: "gowthamsaiprathipati15@gmail.com" },
  { id: "23FE1A05J0", name: "RAGI PRAKASH", email: "ragiprakash240@gmail.com" },
  { id: "23FE1A05J1", name: "RAJANA ASHOK", email: "rajanaashok13@gmail.com" },
  { id: "23FE1A05J3", name: "RAMAVATH SUPRIYA BAI", email: "supriyabairamavath831@gmail.com" },
  { id: "23FE1A05J4", name: "RAMISETTY SUSMITHA", email: "ramisettysusmitha7@gmail.com" },
  { id: "23FE1A05J5", name: "RAPOLU HEMANTH", email: "hemanthrapolu19@gmail.com" },
  { id: "23FE1A05J7", name: "RAVURI TEJASWINI", email: "tejaswiniravuri17@gmail.com" },
  { id: "23FE1A05J8", name: "REDDYMASU SHIRISHA", email: "sirishareddymasu@gmail.com" },
  { id: "23FE1A05J9", name: "RODDA NAGALAKSHMI", email: "roddanagalakshmi432@gmail.com" },
  { id: "23FE1A05K1", name: "SALENDRA SUSANNA", email: "susannasalendhra2005@gmail.com" },
  { id: "23FE1A05K2", name: "SALIMITTI LOKESH", email: "lokeshsalimetty@gmail.com" },
  { id: "23FE1A05K3", name: "SAMBANGI VAMSHI KRISHNA", email: "vamshisambangi566@gmail.com" },
  { id: "23FE1A05K4", name: "SAMI VENKATA NAGA NIRMALA ANUSHNA", email: "samianushna@gmail.com" },
  { id: "23FE1A05K6", name: "SAYED FAYAZ", email: "khasimycp786@gmail.com" },
  { id: "23FE1A05K7", name: "SERU SONI", email: "serusonisoni43@gmail.com" },
  { id: "23FE1A05K8", name: "SESHAMSETTI ANUSHA", email: "srinaidu01140131@gmail.com" },
  { id: "23FE1A05L1", name: "SHAIK DARGA ABDUL GAFOOR", email: "abdulgafoorshaikdarga@gmail.com" },
  { id: "23FE1A05L2", name: "SHAIK HANEEFA", email: "skhaneefaraheem@gmail.com" },
  { id: "23FE1A05L3", name: "SHAIK JAINA VALI", email: "jainass786@gmail.com" },
  { id: "23FE1A05L5", name: "SHAIK MANJUSHA", email: "shaikmanjusha4@gmail.com" },
  { id: "23FE1A05L8", name: "KONAKANCHI SAI SIRISHA", email: "konakanchisirisha2006@gmail.com" },
  { id: "23FE1A05L9", name: "SHAIK VAZIRUNNISA", email: "vazirunnisa7@gmail.com" },
  { id: "23FE1A05M0", name: "SIVVALA SRIHARI", email: "sriharisivvala216@gmail.com" },
  { id: "23FE1A05M1", name: "TELLAMEKALA VENKATA JOGI ABHILASH", email: "abhilashyadav6718@gmail.com" },
  { id: "23FE1A05M2", name: "SONTINENI SAI KRISHNA CHOWDARI", email: "kittusontineni@gmail.com" },
  { id: "23FE1A05M3", name: "TADDI SURYAMMA", email: "saraswatitaddi@gmail.com" },
  { id: "23FE1A05M4", name: "TALURI RAGA DEEPTHI", email: "ragadeepthitalluri2004@gmail.com" },
  { id: "23FE1A05M5", name: "TARRA TEJA VIKAS", email: "tejavikastarra@gmail.com" },
  { id: "23FE1A05M6", name: "THADIBOINA MURARI KRISHNA", email: "murarithadiboina@gmail.com" },
  { id: "23FE1A05M7", name: "THIPPULA REDDYGARI MANASA", email: "manasa18106@gmail.com" },
  { id: "23FE1A05M8", name: "LINGA SAI BHARATH", email: "saibharathlinga@gmail.com" },
  { id: "23FE1A05M9", name: "THOTA PAVAN GOPAL", email: "kowshikvarma327@gmail.com" },
  { id: "23FE1A05N0", name: "TUMMALA LOKESH", email: "lokeshtummala280@gmail.com" },
  { id: "23FE1A05N2", name: "VAKA VENKATESH", email: "venkatesh22210@gmail.com" },
  { id: "23FE1A05N4", name: "VALLABHAPURAPU TEJASWI", email: "tejaswivallabhapurapu@gmail.com" },
  { id: "23FE1A05N5", name: "VALLURI DHANUSRI", email: "valluridhanusri2005@gmail.com" },
  { id: "23FE1A05N6", name: "VANGA KEERTHI REDDY", email: "keerthireddyvanga1@gmail.com" },
  { id: "23FE1A05N7", name: "VANJA JOYCEE FLEROMA", email: "joyceefleromavanja@gmail.com" },
  { id: "23FE1A05O0", name: "YADALA HARI PRASAD", email: "prasadyadala74@gmail.com" },
  { id: "23FE1A05O2", name: "YANAMADALA CHANDANA SREE", email: "sreec8130@gmail.com" },
  { id: "23FE1A05O3", name: "YARAGALLA GOWTHAMKUMAR", email: "yaragallagowthamkumar@gmail.com" },
  { id: "23FE1A05O6", name: "PENUGONDA BABY SUDHA JAYASRI", email: "jayasripenugonda@gmail.com" },
  { id: "23FE1A05O7", name: "KAMANI GOPINATH", email: "gopinathkamani@gmail.com" },
  { id: "23FE1A05P0", name: "SHAIK SREE SAI MURTHY", email: "sreesaimurthy07@gmail.com" },
  { id: "23FE1A1201", name: "AKKALA CHANDRA KISHORE REDDY", email: "reddyakkalachandrakishor@gmail.com" },
  { id: "23FE1A1203", name: "BALUSUPATI ROHINI", email: "rohinisrinivasbalusupati@gmail.com" },
  { id: "23FE1A1204", name: "BANDARU HYMANI SIVESWARI", email: "bandaruhymanisiveswari@gmail.com" },
  { id: "23FE1A1205", name: "BATTULA VENKATA MANIKANTA", email: "manikantamani52723@gmail.com" },
  { id: "23FE1A1206", name: "BHUKYA SRINIVAS NAYAK", email: "srinivasnayakb8@gmail.com" },
  { id: "23FE1A1207", name: "BOLLU SADVIKA", email: "bollusadvika5@gmail.com" },
  { id: "23FE1A1209", name: "CHILUKURI CHANUKYA CHANDRA", email: "chandrachanukya924@gmail.com" },
  { id: "23FE1A1211", name: "DANABOYINA PAVAN KUMAR", email: "tinkudonaboina@gmail.com" },
  { id: "23FE1A1212", name: "GALI BUELA JHANSI", email: "galibuelajhansi@gmail.com" },
  { id: "23FE1A1213", name: "GALI RAMYA JYOTHI", email: "ramyajyothigali@gmail.com" },
  { id: "23FE1A1214", name: "GARIKA RAGHAVENDRA", email: "garikaraghavendra@gmail.com" },
  { id: "23FE1A1215", name: "GARNEDI TARUN KUMAR", email: "garneditarunkumar188@gmail.com" },
  { id: "23FE1A1216", name: "GHANTA POOJA SRI", email: "poojasrighanta955@gmail.com" },
  { id: "23FE1A1217", name: "GONUGUNTA LAKSHMI HARSHA VARDHAN SAI", email: "harshavardhan150806@gmail.com" },
  { id: "23FE1A1218", name: "GOTTIPATI ANJALI DEVI", email: "gottipatianjalidevi3@gmail.com" },
  { id: "23FE1A1219", name: "GUNJI NANDINI", email: "gunjinandini25@gmail.com" },
  { id: "23FE1A1220", name: "JANGAM AKSHAYA", email: "jangamakshaya4@gmail.com" },
  { id: "23FE1A1223", name: "KANCHETI NANDANA JYOTHI", email: "nyandy.583@gmail.com" },
  { id: "23FE1A1224", name: "KARTHIK REDDY VAJRALA", email: "vajralakarthikreddy143@gmail.com" },
  { id: "23FE1A1225", name: "KATA HARI GOPALA KRISHNA", email: "gopalhari293@gmail.com" },
  { id: "23FE1A1227", name: "KRAPA KUSUMA", email: "kusumakrapa45@gmail.com" },
  { id: "23FE1A1228", name: "MANAM VENGAMADHURI", email: "vengamadhurimanam10@gmail.com" },
  { id: "23FE1A1229", name: "MANDADI JAGADHEESH", email: "m.jagadheesh7396525396@gmail.com" },
  { id: "23FE1A1230", name: "MANNEM VAMSI KRISHNA", email: "mannemvamsi0730@gmail.com" },
  { id: "23FE1A1232", name: "MEGAVATH DATTU NAIK", email: "dathunaik631@gmail.com" },
  { id: "23FE1A1233", name: "NARENDRA NAGA SUDHEER", email: "nagasudheernarendra7071@gmail.com" },
  { id: "23FE1A1234", name: "NELLURI SINGARAIAH", email: "nellurisingaraiah9@gmail.com" },
  { id: "23FE1A1236", name: "NUNNA ANUSHA", email: "anushanunna196@gmail.com" },
  { id: "23FE1A1238", name: "PANEM NAVEEN", email: "panemnaveen12@gmail.com" },
  { id: "23FE1A1239", name: "PATIBANDLA JAYASRI", email: "patibandlajayasri@gmail.com" },
  { id: "23FE1A1244", name: "PRATHI MADHAVI", email: "madhaviprathi36@gmail.com" },
  { id: "23FE1A1245", name: "RACHAKONDA GAYATHRI", email: "gayathrirachakonda1726@gmail.com" },
  { id: "23FE1A1246", name: "RELLA VIJAYA LAKSHMI", email: "vijayalakshmi.rella46@gmail.com" },
  { id: "23FE1A1247", name: "REVU DEEKSHITHA", email: "deekshitharevu@gmail.com" },
  { id: "23FE1A1248", name: "SHAIK ARSH AFROZ", email: "arshafroz1915@gmail.com" },
  { id: "23FE1A1250", name: "SHAIK NAYEEM", email: "shaiknayeem1414@gmail.com" },
  { id: "23FE1A1251", name: "SHAIK SAMEENA", email: "sameenashaik5251@gmail.com" },
  { id: "23FE1A1253", name: "SHAIK VASIF", email: "shaikvasif02@gmail.com" },
  { id: "23FE1A1254", name: "SYED NAJMA", email: "najmasyed83@gmail.com" },
  { id: "23FE1A1257", name: "THIRUVEEDULA NAGA SANDEEP", email: "nagasandeepthiru@gmail.com" },
  { id: "23FE1A1258", name: "THOTA LAKSHMI NARASAMMA", email: "lakshmithota942@gmail.com" },
  { id: "23FE1A1260", name: "VAJRALA SNEHA PRIYA", email: "Snehapriyavajrala@gmail.com" },
  { id: "23FE1A1263", name: "VELPULA VENKATA SAI VIVEK TAGUR", email: "vvelpulavenkatasai@gmail.com" },
  { id: "23FE1A1264", name: "YALAVARTHI SREYANTH", email: "yalavarathisreyanth2006@gmail.com" },
  { id: "23FE1A1265", name: "YAMANI KARTHIK", email: "karthikntr673@gmail.com" },
  { id: "23FE1A1266", name: "THOTA MANIKANTA", email: "manikantachowdarythota@gmail.com" },
  { id: "23FE1A4201", name: "ADUSUMALLI GOWTHAM", email: "gowthamadusumalliadusumalligow@gmail.com" },
  { id: "23FE1A4202", name: "ANGIREKULA BHAVANA", email: "angirekulabhavana@gmail.com" },
  { id: "23FE1A4203", name: "BATHULA SHANMUKHA PRIYA", email: "bathulashanmukhapriya05@gmail.com" },
  { id: "23FE1A4204", name: "BATTULA YASWANTH", email: "yb961824@gmail.com" },
  { id: "23FE1A4205", name: "BHAVANAM SAI KIRAN REDDY", email: "saikiranbhavanam584@gmail.com" },
  { id: "23FE1A4206", name: "BELLAMKONDA DURGA BHAVANI", email: "bhavani101205@gmail.com" },
  { id: "23FE1A4207", name: "BODEMPUDI ANUDEEP", email: "anudeepchowdary13@gmail.com" },
  { id: "23FE1A4208", name: "BUDATI RAGHAVENDRA KUMAR", email: "raghavendrakumarbudati@gmail.com" },
  { id: "23FE1A4209", name: "CHERUKURU PREMCHAND", email: "premchandcherukuru@gmail.com" },
  { id: "23FE1A4210", name: "CHIMMILI LAKSHMI KUMARI", email: "chimmililakshmikumari57@gmail.com" },
  { id: "23FE1A4211", name: "CHINTAGUNTI RAMYASRI", email: "chintaguntiramyasri05@gmail.com" },
  { id: "23FE1A4213", name: "CHOWTA ARCHANA", email: "archana192627@gmail.com" },
  { id: "23FE1A4215", name: "DEVANA GOPI KRISHNA", email: "d.gopikrishna07@gmail.com" },
  { id: "23FE1A4217", name: "GADDAM MANOJ BHARGAV", email: "gaddammanojbhargav@gmail.com" },
  { id: "23FE1A4218", name: "GADE HIMA BINDU", email: "himabindugade0706@gmail.com" },
  { id: "23FE1A4223", name: "GOPE UMA MANI SREE", email: "manisrigope2005@gmail.com" },
  { id: "23FE1A4224", name: "GUMMADIDALA AKSHAY", email: "akshaygummadidala@gmail.com" },
  { id: "23FE1A4225", name: "INDLACHERUVU AMAR MANIKANTA", email: "manikantaindlacheruvu@gmail.com" },
  { id: "23FE1A4226", name: "KACHALLA AJAYNAIDU", email: "ajaynaidu1308@gmail.com" },
  { id: "23FE1A4227", name: "KALAVAKURI SRAVANI", email: "sravanikalavakuri2004@gmail.com" },
  { id: "23FE1A4228", name: "KALE SRI NIKHIL ROSHAN", email: "kalesrinikhilroshan123@gmail.com" },
  { id: "23FE1A4230", name: "KHANDAPU RAHUL", email: "rahulkhandapu@gmail.com" },
  { id: "23FE1A4231", name: "KONDRU HASITHA", email: "hasitha.kondru@gmail.com" },
  { id: "23FE1A4232", name: "KOPPOLU VENKAT", email: "koppoluvenkat77@gmail.com" },
  { id: "23FE1A4233", name: "KOTA SASI KIRAN REDDY", email: "kotasasikiran07@gmail.com" },
  { id: "23FE1A4234", name: "KOTHAPALLI SRI VARDHAN CHOWDARY", email: "kothapallisrivardhanchowdary6@gmail.com" },
  { id: "23FE1A4236", name: "MAHALI BHAVYA", email: "bhavyamahali@gmail.com" },
  { id: "23FE1A4237", name: "MALINEDI NIHARIKA", email: "malineniniharika16@gmail.com" },
  { id: "23FE1A4238", name: "MANDALAPU LILLY", email: "mandalapulilly@gmail.com" },
  { id: "23FE1A4239", name: "MARISETTY MEGHANA", email: "marisettymeghana123@gmail.com" },
  { id: "23FE1A4240", name: "MITTA NAVYA SAI", email: "navyanani1984@gmail.com" },
  { id: "23FE1A4241", name: "MOHAMMAD FARHEEN", email: "farheenmohammad102@gmail.com" },
  { id: "23FE1A4242", name: "MOHAMMAD SHAIK ABDULLAH", email: "mohammadshaikabdullah2003@gmail.com" },
  { id: "23FE1A4243", name: "MURARI JAGAN SAI", email: "murarijagansai@gmail.com" },
  { id: "23FE1A4244", name: "NAZNEEN FIRDOUS BEGUM", email: "nazneenfirdous741@gmail.com" },
  { id: "23FE1A4245", name: "NUNUSAVATH BHANU NAYAK", email: "bhanunayak9505@gmail.com" },
  { id: "23FE1A4246", name: "PALLAPU VIJAY", email: "vijaypallapu50@gmail.com" },
  { id: "23FE1A4247", name: "PATTAN SHARUKH KHAN", email: "sharukh14082004@gmail.com" },
  { id: "23FE1A4249", name: "PITLA CHAITANYA REDDY", email: "pchaitanyareddy898@gmail.com" },
  { id: "23FE1A4250", name: "RAYADI TRISHA", email: "rayaditrisha@gmail.com" },
  { id: "23FE1A4251", name: "SHAIK MAHABUNNISA", email: "mabusk509@gmail.com" },
  { id: "23FE1A4252", name: "SHAIK MOHAMMAD KARISHMA", email: "karishma4252@gmail.com" },
  { id: "23FE1A4253", name: "SHAIK MOULALI", email: "moulalishaik786724@gmail.com" },
  { id: "23FE1A4256", name: "SIVALANKA MONOJ KUMAR", email: "monojpcs22@gmail.com" },
  { id: "23FE1A4259", name: "THARIGOPPULA MANIKANTA NARASIMHAIAH", email: "tharigoppulamanikanta@gmail.com" },
  { id: "23FE1A4261", name: "VALLEPU PRANAY KUMAR", email: "pranayvallepu415@gmail.com" },
  { id: "23FE1A4262", name: "VANTERU RAMAKANTH", email: "ramakanthvanteru05@gmail.com" },
  { id: "23FE1A4263", name: "YARRAM KUSUMA REDDY", email: "kusumayarram@gmail.com" },
  { id: "23FE1A4265", name: "NIMMAGADDA DIVYASRI SAI SARVANI", email: "ndsssarvani@gmail.com" },
  { id: "23FE1A4301", name: "ADDEPALLI SUHITH", email: "suhithaddepalli2005@gmail.com" },
  { id: "23FE1A4302", name: "ATCHI HIMA BINDU", email: "atchihimabindu@gmail.com" },
  { id: "23FE1A4303", name: "AVULA RAHUL KUMAR REDDY", email: "arahulkumarreddy12@gmail.com" },
  { id: "23FE1A4304", name: "BADDURI HARSHITHA", email: "baddduriharshitha@gmail.com" },
  { id: "23FE1A4305", name: "BETHA PRABHAKAR REDDY", email: "prabhakarreddybetha@gmail.com" },
  { id: "23FE1A4306", name: "BHAVIRISETTI NITHIN", email: "nithinsmart323@gmail.com" },
  { id: "23FE1A4307", name: "BITRA SAI BHARATHI", email: "sbitra20@gmail.com" },
  { id: "23FE1A4308", name: "BOLLEDDU GOWTHAMI", email: "bolleddugowthami89@gmail.com" },
  { id: "23FE1A4309", name: "BONTHA RAMANAIAH", email: "ramanaiahbontha99@gmail.com" },
  { id: "23FE1A4310", name: "CHANDRAGIRI NAVEEN", email: "chandragirinaveen61@gmail.com" },
  { id: "23FE1A4311", name: "CHILUKURI SNEHA", email: "chilukurisnehachowdary@gmail.com" },
  { id: "23FE1A4312", name: "DEVARASETTY MANASA", email: "manasadevarasetty6@gmail.com" },
  { id: "23FE1A4313", name: "GADIPARTHI CHANDRIKA SAI SRI", email: "saiiichowdarychandrika@gmail.com" },
  { id: "23FE1A4314", name: "GOPANABOYINA DHANUSHA", email: "dhanusha7411@gmail.com" },
  { id: "23FE1A4315", name: "GUDIPATI BHANU PRAKASH", email: "bhanuprakashgudipati.123@gmail.com" },
  { id: "23FE1A4316", name: "GUDURI BALA BHASKAR RAO", email: "guduribhaskar24@gmail.com" },
  { id: "23FE1A4317", name: "JAGANNADHAM NAVYA SRI", email: "jagannadhamnavya2@gmail.com" },
  { id: "23FE1A4318", name: "JILLAPOGU SIVA DURGA BHAVANI", email: "jillapoguduraga@gmail.com" },
  { id: "23FE1A4319", name: "KAKANI MOHAN", email: "kakanimohank@gmail.com" },
  { id: "23FE1A4320", name: "KAKUNURI HEMA SREE", email: "kakunurihemasree@gmail.com" },
  { id: "23FE1A4321", name: "KARPURAPU KAVYA SRI", email: "kavyasrikarpurapu@gmail.com" },
  { id: "23FE1A4322", name: "KATREDDY JYOTHSNA", email: "jyokatreddy@gmail.com" },
  { id: "23FE1A4323", name: "KEERTHI BAI ISLAVATH", email: "keerthiislavath8@gmail.com" },
  { id: "23FE1A4325", name: "KOMPALA AKSHAY", email: "Kompalaakshay2004@gmail.com" },
  { id: "23FE1A4326", name: "KONAMANCHILI NANDU PRIYA", email: "konamanchilinandupriya@gmail.com" },
  { id: "23FE1A4327", name: "KORRAPATI PAVANI", email: "korrapatipavani2428@gmail.com" },
  { id: "23FE1A4329", name: "KUPPALA AMARESWARA RAO", email: "amarnadhalm123@gmail.com" },
  { id: "23FE1A4330", name: "KURAPATI HANNAH", email: "hannahkurapati@gmail.com" },
  { id: "23FE1A4331", name: "MACHERLA PRAVEEN SAI", email: "praveensai3333@gmail.com" },
  { id: "23FE1A4332", name: "MADIREDDY KAVYA", email: "m.kavyareddy777@gmail.com" },
  { id: "23FE1A4333", name: "MATHE EINSTEIN", email: "m.einstein42@gmail.com" },
  { id: "23FE1A4334", name: "MATTA JYOTHIKA", email: "mattajyothika@gmail.com" },
  { id: "23FE1A4335", name: "MUDAVATHU LAKSHMAN NAIK", email: "lakshman15923@gmail.com" },
  { id: "23FE1A4336", name: "MULLANGI YAMUNA", email: "mullangiyamuna@gmail.com" },
  { id: "23FE1A4337", name: "NAGULAPATI DEVI", email: "nagulapatidevi57@gmail.com" },
  { id: "23FE1A4338", name: "NALLAGORLA SAMRAJYAM", email: "samrajyamnallagorla5@gmail.com" },
  { id: "23FE1A4339", name: "NANNAPANENI JAHNAVI", email: "jahnavi16102005@gmail.com" },
  { id: "23FE1A4340", name: "NIZAMPATNAM TRINADH", email: "ssvtn21@gmail.com" },
  { id: "23FE1A4341", name: "PALLA YASWANTH SAI SIMHA", email: "yaswanthcherry2006@gmail.com" },
  { id: "23FE1A4342", name: "PAMULAPATI CHANDANA SRI", email: "pamulapatichandanasri@gmail.com" },
  { id: "23FE1A4343", name: "PATHAN NEELOFER", email: "neeloferpathan2023@gmail.com" },
  { id: "23FE1A4344", name: "PATTAN HISHAM KHAN", email: "hishamkhan3009@gmail.com" },
  { id: "23FE1A4345", name: "POLICHERLA SIVA SAI NAGA LAKSHMI", email: "lakshmipolicharla1508@gmail.com" },
  { id: "23FE1A4346", name: "SAI CHAITANYA ANNAM", email: "annamsai825@gmail.com" },
  { id: "23FE1A4347", name: "SAJJA BINDU SRI", email: "sajjabindusri@gmail.com" },
  { id: "23FE1A4348", name: "SHAIK ABDUL RAZAK", email: "razzakshaikh2320@gmail.com" },
  { id: "23FE1A4349", name: "SHAIK HUSSAINBI", email: "sm.hussainbi@gmail.com" },
  { id: "23FE1A4352", name: "SUNKARA JYOTHSNA PRIYA", email: "jyothsnasunkara19@gmail.com" },
  { id: "23FE1A4354", name: "TAGORE KOTTAPALLI", email: "chowdarytagore07@gmail.com" },
  { id: "23FE1A4355", name: "TAGULLA NATHANIEL", email: "tagullanathaniel@gmail.com" },
  { id: "23FE1A4356", name: "TAMMA YAGNA SIVA HARSHITH REDDY", email: "tharshithreddy07@gmail.com" },
  { id: "23FE1A4357", name: "TATA GOWTHAMI", email: "gowthamitata464@gmail.com" },
  { id: "23FE1A4358", name: "THATAVARTHY SHANMUKHA VENKATA VARDHAN", email: "shanmukha.tsvv@gmail.com" },
  { id: "23FE1A4359", name: "THIRUVEEDULA ROHITH SRI VENKATA SIDDARDHA", email: "siddutiruveedula633@gmail.com" },
  { id: "23FE1A4360", name: "THOLLIKONDA VASAVI", email: "thollikondavasavi@gmail.com" },
  { id: "23FE1A4361", name: "VALIVARTHI GOWTHAMI", email: "gouthamivalivarthi@gmail.com" },
  { id: "23FE1A4362", name: "VARAKAVI RAVI TEJA RAJU", email: "rt164486@gmail.com" },
  { id: "23FE1A4363", name: "YEMINENI KAVYA", email: "kavyayemineni20@gmail.com" },
  { id: "23FE1A4365", name: "PINNIKA VENKATA RAO", email: "venkychowdary017@gmail.com" },
  { id: "23FE1A4404", name: "ANNAPUREDDY RAJITHA", email: "annapureddyrajitha2005@gmail.com" },
  { id: "23FE1A4407", name: "BAPANAPALLI TEJASWINI", email: "tejaswinibapanapalli@gmail.com" },
  { id: "23FE1A4408", name: "BATHULA RAJITHA", email: "rajithabathula17@gmail.com" },
  { id: "23FE1A4409", name: "BOMMANABOINA VENKATA KOTESWARA RAO", email: "koteswararaob062@gmail.com" },
  { id: "23FE1A4413", name: "DANDI VENKATARAMANA", email: "dandivenky@gmail.com" },
  { id: "23FE1A4415", name: "GANGIREDDY VENKATA SRAVANTHI", email: "gangireddyvenkataramana1@gmail.com" },
  { id: "23FE1A4416", name: "GOLLA ANANTHA LAKSHMI HEMA HARINI", email: "harinigolla681@gmail.com" },
  { id: "23FE1A4418", name: "JATAVATHU NANDINI BAI", email: "nandinijatavath4@gmail.com" },
  { id: "23FE1A4424", name: "KANNETI TRINATH GANESH", email: "kannetisidhu2@gmail.com" },
  { id: "23FE1A4425", name: "KAPALAVAI ADITHYA KUMAR", email: "Adithyakumarkapalavai@gmail.com" },
  { id: "23FE1A4426", name: "KEMA PAVAN KUMAR", email: "pavankumarkema@gmail.com" },
  { id: "23FE1A4428", name: "KORRAKUTI THIRUMALA VASU", email: "korrakutivasu03@gmail.com" },
  { id: "23FE1A4431", name: "M DEVA PRIYA DARSHINI", email: "priyadarshinimoparthi@gmail.com" },
  { id: "23FE1A4432", name: "MANDALAPU MADHURI", email: "mandalapumadhuri9@gmail.com" },
  { id: "23FE1A4436", name: "OMKAR CHALLAGOLLA", email: "challagollaomkar@gmail.com" },
  { id: "23FE1A4437", name: "PAILA SYAMALA DEVI", email: "syamaladevipaila837@gmail.com" },
  { id: "23FE1A4438", name: "PALLAPU SAI KRISHNA", email: "saikrishnapallapu4@gmail.com" },
  { id: "23FE1A4439", name: "PEDDARAPU SIVA SANKAR", email: "peddarapusivashankar@gmail.com" },
  { id: "23FE1A4441", name: "PITCHUKA SIVA NAGA PREETHI", email: "preethipitchuka@gmail.com" },
  { id: "23FE1A4442", name: "PURAM SAI TEJA", email: "puramsaiteja52@gmail.com" },
  { id: "23FE1A4443", name: "PUSULURU MADHU", email: "madhupusuluru@gmal.com" },
  { id: "23FE1A4445", name: "ROBBIESON DEEPATI", email: "robbieson31@gmail.com" },
  { id: "23FE1A4446", name: "SAMANTHAPUDI V S BRAHMA TEJA", email: "samanthapudivsbrahmateja46@gmail.com" },
  { id: "23FE1A4447", name: "SHAIK INAYATULLAH", email: "shaikinayatullah906@gmail.com" },
  { id: "23FE1A4448", name: "SHAIK MEERAVALI", email: "meeravalishaik230@gmail.com" },
  { id: "23FE1A4449", name: "SHAIK MOHAMMAD RAFI", email: "shaikrafi37170@gmail.com" },
  { id: "23FE1A4451", name: "SHAIK SOWMYA", email: "sowmyashaik1@gmail.com" },
  { id: "23FE1A4452", name: "SUDDAPALLI MAHESH", email: "maheshsuddapalli99@gmail.com" },
  { id: "23FE1A4453", name: "TALLAPANENI BHUMIKA", email: "bhumikatallapaneni09@gmail.com" },
  { id: "23FE1A4454", name: "TELLAMEKALA PURNA NAGA SHANMUKH", email: "shanmukhtellamekala@gmail.com" },
  { id: "23FE1A4455", name: "THEEDA HARIDEEP", email: "theedaharideep@gmail.com" },
  { id: "23FE1A4456", name: "THUMMALAPALLI SUSMITHA", email: "susmithathummalapalli257@gmail.com" },
  { id: "23FE1A4457", name: "THURIMELLA ROHITH", email: "rohitthurimella13@gmail.com" },
  { id: "23FE1A4460", name: "VENKATA SAI SUSHANTH GARAPATI", email: "sushanthgarapati02@gmail.com" },
  { id: "23FE1A4461", name: "VISHNUMOLAKALA MANI GOPAL", email: "manigopal.dev@gmail.com" },
  { id: "23FE1A4464", name: "YELISETTY SRILOKESH", email: "srilokeshyelisetty212@gmail.com" },
  { id: "23FE1A4465", name: "VELPURI TEJA VENKATA ANJANEYA KUMAR", email: "tejavelpuri56@gmail.com" },
  { id: "23FE1A4466", name: "KOLLA CHARAN AKASH", email: "kollacharanakash@gmail.com" },
  { id: "23FE1A4467", name: "CHINTALAPUDI RESHMA", email: "reshmachintalapudi@gmail.com" },
  { id: "23FE1A6101", name: "ADINA NARENDRA", email: "narendraadina24@gmail.com" },
  { id: "23FE1A6102", name: "ANGIREKULA PARDHAV SAI", email: "pardhavsai.15@gmail.com" },
  { id: "23FE1A6103", name: "AVULA LAKSHMI POTHURAJU", email: "avulalakshmipothuraju@gmail.com" },
  { id: "23FE1A6105", name: "BEDUDURU LAKSHMI GEETHIKA", email: "geethikabeduduri@gmail.com" },
  { id: "23FE1A6106", name: "BEJJIPURAM SIVA", email: "sivabejjipuram2005@gamil.com" },
  { id: "23FE1A6108", name: "BHUKYA RAMA CHANDRA NAYAK", email: "rcnbhukya@gmail.com" },
  { id: "23FE1A6111", name: "CHEBROLU SANDEEP", email: "chebster2006@gmail.com" },
  { id: "23FE1A6112", name: "CHENNUBOINA BHAVYA SRI SAI AMBIKA", email: "bhavyachennuboina@gmail.com" },
  { id: "23FE1A6113", name: "CHINTALAPUDI SAI", email: "chinthlapudisai1234@gmail.com" },
  { id: "23FE1A6114", name: "DANDA PALLAVI", email: "pallavidanda8@gmail.com" },
  { id: "23FE1A6115", name: "DARMISETTY KALADHAR ROYAL", email: "kaladharroyal@gmail.com" },
  { id: "23FE1A6116", name: "DASARI SASIGOPAL", email: "dsasigopal@gmail.com" },
  { id: "23FE1A6117", name: "DONTHAMSETTY TEJASWINI", email: "donthamsettytejaswini@gmail.com" },
  { id: "23FE1A6119", name: "GOSE SWETHA", email: "swethag1833@gmail.com" },
  { id: "23FE1A6120", name: "GUDE TRIVENI", email: "trivenigude0703@gmail.com" },
  { id: "23FE1A6121", name: "JADA SAMEL RAJU", email: "jadaraju817@gmail.com" },
  { id: "23FE1A6123", name: "JINKA PADMA", email: "jinkapadma2005@gmail.com" },
  { id: "23FE1A6125", name: "KAYALA YASASWINI", email: "yasaswinikayala24@gmail.com" },
  { id: "23FE1A6127", name: "KONDAMADUGULA AJAY VARDHAN REDDY", email: "kondamadugulaajayvardhan@gmail.com" },
  { id: "23FE1A6128", name: "KONDAPATURI JAHNAVI", email: "Kondapaturijahnavi@gmail.com" },
  { id: "23FE1A6129", name: "KOPPULA BHUVAN TEJ", email: "koppulabhuvantej@gmail.com" },
  { id: "23FE1A6131", name: "MAMIDIPAKA VARUN NAGASAI", email: "varunnagasaimamidipaka@gmail.com" },
  { id: "23FE1A6132", name: "MARPU MANOJ KUMAR", email: "marpumintu11@gmail.com" },
  { id: "23FE1A6133", name: "MATTAPALLI KAVYA", email: "kavyamattapalli323@gmail.com" },
  { id: "23FE1A6134", name: "MOPIDEVI ABHIRAM CHARAN", email: "abhirammopidevi74@gmail.com" },
  { id: "23FE1A6135", name: "MUKIRIPI SATHWIK", email: "sathwik4550@gmail.com" },
  { id: "23FE1A6136", name: "NAGA BHAVYA SRI RAJAVARAPU", email: "rajavarapubhavyasri@gmail.coma" },
  { id: "23FE1A6137", name: "NAGARATTHUGARI HABEEBA", email: "habeebanagarathugari@gmail.com" },
  { id: "23FE1A6138", name: "PANCHUMARTHI SATYA PRAKASH", email: "satyanani136@gmail.com" },
  { id: "23FE1A6139", name: "PASUPULETI MOUNIKA", email: "mounip2006@gmail.com" },
  { id: "23FE1A6140", name: "PERUBOINA SUMANTH", email: "sumanthyadav54o@gmail.com" },
  { id: "23FE1A6141", name: "PITTI JAGADEESH", email: "jagadeeshpitti@gmail.com" },
  { id: "23FE1A6143", name: "PRATTIPATI KAVYA", email: "kavyachoudary3@gmail.com" },
  { id: "23FE1A6144", name: "PULIVARTHI SAHITHI", email: "pulivarthisahithi25@gmail.com" },
  { id: "23FE1A6145", name: "PULIVARTHI SRAVANI", email: "sravanipulivarthi2004@gmail.com" },
  { id: "23FE1A6146", name: "PURAMA NANDANA LAKSHMI", email: "ppuramanandana@gmail.com" },
  { id: "23FE1A6147", name: "RAAVI VINAY", email: "vinayraavi143@gmail.com" },
  { id: "23FE1A6149", name: "SEELAM YAMUNA", email: "yamunaseelam55@gmail.com" },
  { id: "23FE1A6151", name: "SHAIK HABIMUNNISA", email: "habishaik046@gmail.com" },
  { id: "23FE1A6153", name: "SHAIK RIYAZ", email: "riyazshaik2113@gmail.com" },
  { id: "23FE1A6155", name: "SHAIK UMAR SOHEL", email: "umarsohel528@gmail.com" },
  { id: "23FE1A6156", name: "SOMAROUTHU SINDHUJA LAKSHMI", email: "s.sindhu210506@gmail.com" },
  { id: "23FE1A6158", name: "TUMMURI MANOGNA SAI", email: "manognasaitummuri@gmail.com" },
  { id: "23FE1A6159", name: "VALLURI MOUNIKA", email: "mounivalluri2006@gmail.com" },
  { id: "23FE1A6160", name: "VEDAPRIYA NAGASAI NADENDLA", email: "vedapriya369@gmail.com" },
  { id: "23FE1A6163", name: "JANGA MANU", email: "manu163563@gmail.com" },
  { id: "23FE1A6164", name: "NENAVATHU MAHESH NAIK", email: "n.maheshnaik@gmail.com" },
  { id: "24FE5A0101", name: "ALLU DHARMA RAO", email: "alludharma42@gmail.com" },
  { id: "24FE5A0103", name: "ANNAM MEGHANA", email: "annammeghana2910@gmail.com" },
  { id: "24FE5A0104", name: "BADDI VENKATA DURGA BHAVANI", email: "baddivenkatdurgabhavani@gmail.com" },
  { id: "24FE5A0105", name: "BANDI SIVAIAH", email: "sivayadav7821@gmail.com" },
  { id: "24FE5A0106", name: "BETHAPUDI PRADEEP", email: "bethapudipradeep3@gmail.com" },
  { id: "24FE5A0107", name: "BODDU PHANENDRA", email: "phanendraboddu7@gmail.com" },
  { id: "24FE5A0108", name: "CHOLLANGI RAMCHARAN", email: "ramchollangi164@gmail.com" },
  { id: "24FE5A0109", name: "DEVARAKONDA SANDHYA RANI", email: "devarakondasandhyarani99@gmail.com" },
  { id: "24FE5A0110", name: "DOLA HEMANTH", email: "dolahemanth09@gmail.com" },
  { id: "24FE5A0111", name: "ERAPANI VENKATA MANI SANKAR", email: "m7303810@gmail.com" },
  { id: "24FE5A0112", name: "GUJJULA SAI KRISHNA VENI", email: "saikrishnavenig@gmail.com" },
  { id: "24FE5A0113", name: "SARNALA KARTHIK", email: "karthiksarnala88@gmail.com" },
  { id: "24FE5A0114", name: "KANCHI MEENAKSHI", email: "kanchimeenakshi2005@gmail.com" },
  { id: "24FE5A0115", name: "KARIMINENI MUNI PAVAN KUMAR", email: "kmunipavankumar@gmail.com" },
  { id: "24FE5A0116", name: "KARRE BALA KRISHNA", email: "balakrishnakarre05@gmail.com" },
  { id: "24FE5A0117", name: "KOMMANAPALLI HARSHAVARDHAN", email: "harshavardhankommanapalli9611@gmail.com" },
  { id: "24FE5A0118", name: "KUPPILI YASWANTH KUMAR", email: "yaswanth081.k@gmail.com" },
  { id: "24FE5A0119", name: "LANDA ANANDA RAO", email: "anandlanda1@gmail.com" },
  { id: "24FE5A0120", name: "MADUGULA CHANDU", email: "chandumadugula123@gmail.com" },
  { id: "24FE5A0121", name: "MALISETTY PARDHA VENKATA ESWAR", email: "malisettipardhu@gmail.com" },
  { id: "24FE5A0122", name: "MEDA GOPI", email: "gopimeda91@gmail.com" },
  { id: "24FE5A0123", name: "MUTHYALA SAI BALAJI", email: "saibalajimuthyala@gmail.com" },
  { id: "24FE5A0124", name: "NANDIKOLLA PAVITHRA GANGA", email: "wwwpavithra342@gmail.com" },
  { id: "24FE5A0125", name: "NUNE ALEKHYA", email: "nunealekhya025@gmail.com" },
  { id: "24FE5A0126", name: "PALAPARTHI SUSMITHA", email: "mallelasusmitha36@gmail.com" },
  { id: "24FE5A0127", name: "RAVURI MEGHANA", email: "meghanaprasad155@gmail.com" },
  { id: "24FE5A0128", name: "VENKATA MAHESH KUMAR KUKKALA", email: "mahesh11ramv@gmail.com" },
  { id: "24FE5A0201", name: "AKULA SRINIVAS", email: "asrinivas5838@gmail.com" },
  { id: "24FE5A0202", name: "CHINNALA MOHANARAO", email: "chinnalamohan777@gmail.com" },
  { id: "24FE5A0203", name: "CHORAGUDI RAJA SEKHAR", email: "choragudirajasekhar9@gmail.com" },
  { id: "24FE5A0204", name: "GOLI SUVARNA KUMAR", email: "golisuvarnakumar@gmail.com" },
  { id: "24FE5A0205", name: "INDLA BHASKAR KUMAR", email: "bhaskarkumar4691@gmail.com" },
  { id: "24FE5A0206", name: "MARAM LAKSHMINARAYANA", email: "maramlakshminarayana15@gmail.com" },
  { id: "24FE5A0207", name: "OMMI  HARSHA VARDHAN", email: "harshavardhanommi20@gmail.com" },
  { id: "24FE5A0208", name: "SEGINENI DINESH", email: "seginenidinesh2019@gmail." },
  { id: "24FE5A0209", name: "PODDOKU VENU", email: "poddokuvenu@gmail.com" },
  { id: "24FE5A0210", name: "R ANJANEYULU NAIK", email: "anjiramavath10@gmail.com" },
  { id: "24FE5A0211", name: "SHAIK NAZEER", email: "nazeermunna22shaik@gmail.com" },
  { id: "24FE5A0212", name: "THADELA SAI KUMAR", email: "saithadela3@gmail.com" },
  { id: "24FE5A0213", name: "TURAKA RAMYA KIRANMAI", email: "turakaramyakiranmai@gmail.com" },
  { id: "24FE5A0214", name: "YADAVALLI LAYA NAGA SRI", email: "layanagasri@gmail.com" },
  { id: "24FE5A0215", name: "YEADUMALLA RANJITH KUMAR", email: "ranjithkumaryeadumalla1120@gmail.com" },
  { id: "24FE5A0301", name: "AGNIPARTHI VENKATA SAI", email: "venkatasai8712@gmail.com" },
  { id: "24FE5A0302", name: "BADDULA SAI PHANEENDHAR KUMAR", email: "saiphanindrakumar4368@gmail.com" },
  { id: "24FE5A0303", name: "BADUGU KARUNAKAR", email: "kkarunakar920@gmail.com" },
  { id: "24FE5A0304", name: "BAGATI TARUN", email: "bagatitarun@gmail.com" },
  { id: "24FE5A0305", name: "BHEEMISETTI YATHIN", email: "bheemisettiyathin123@gmail.com" },
  { id: "24FE5A0306", name: "BOJANKI TEJA", email: "tejabojanki770@gmail.com" },
  { id: "24FE5A0307", name: "CHANDALA LNS SASI KIRAN", email: "saimech747@gmail.com" },
  { id: "24FE5A0308", name: "CHAPPIDI KARTHEEK VAMSI", email: "adityakarthik369@gmail.com" },
  { id: "24FE5A0309", name: "CHITTURI ESWAR SAI", email: "eswarsai9912@gmail.com" },
  { id: "24FE5A0311", name: "DARA SURYA TEJA", email: "suryatejadara9876@gmail.com" },
  { id: "24FE5A0312", name: "GOLLAPOTHU SRINIVAS", email: "srinivasgollapothu@gmail.com" },
  { id: "24FE5A0313", name: "INUMARTHI RUDHRA VENKATA SATYA VINAY", email: "inumarthivinay20005@gmail.com" },
  { id: "24FE5A0314", name: "JALLI SANJAY", email: "sanjayjalli74@gmali.con" },
  { id: "24FE5A0315", name: "JONNA AAMOSE", email: "aamosejonna5@gmail.com" },
  { id: "24FE5A0316", name: "KAKANI MANOJ BABU", email: "kakanimanojbabu28@gmail.com" },
  { id: "24FE5A0317", name: "KALABATHULA ABHI", email: "kalabathulaabhi4561@gmail.com" },
  { id: "24FE5A0318", name: "KARRI THARUN", email: "ramaraokarri12345@gmail.com" },
  { id: "24FE5A0319", name: "KARTHIK BANDIGALLA", email: "bandikallakanakaiaha@gmail.com" },
  { id: "24FE5A0320", name: "KATIKALA VENKATA REDDY", email: "katikalavenkatareddy@gmail.com" },
  { id: "24FE5A0321", name: "KOLLA HEMANTH KUMAR", email: "khemanthkumar2002@gmail.com" },
  { id: "24FE5A0322", name: "KOMATI ABHI RAM", email: "abannu94@gmail.com" },
  { id: "24FE5A0323", name: "KONTHALA HIMESH", email: "konthalahimesh@gmail.com" },
  { id: "24FE5A0324", name: "KOPANATHI NAVEEN", email: "naveenkopanathi666@gmail.com" },
  { id: "24FE5A0325", name: "KOTA AKESWARARAO", email: "akeshkotakeshkota@gmail.com" },
  { id: "24FE5A0326", name: "KOYYA PREM CHANDU", email: "premchanduk893@gmail.com" },
  { id: "24FE5A0327", name: "MEDISETTI MANOHAR", email: "madisettimanohar56@gmail.com" },
  { id: "24FE5A0328", name: "MOHAMMAD IRFAN", email: "irfhanmd037@gmail.com" },
  { id: "24FE5A0331", name: "PAMARTHI YASWANTH CHANDRA", email: "pyaswanthchandra@gmail.com" },
  { id: "24FE5A0332", name: "PATAN SUHEL", email: "patansuhel62@gmail.com" },
  { id: "24FE5A0334", name: "PULIPATI VIJAYA BALA KRISHNA", email: "vijayabalakrishna1622211@gmail.com" },
  { id: "24FE5A0335", name: "PUVVADA VENKATA SAI TEJA", email: "puvvadasaiteja@gmail.com" },
  { id: "24FE5A0336", name: "REDDI VASU DEMULLU VAMSI", email: "vamsireddy1635@gmail.com" },
  { id: "24FE5A0337", name: "SALAPU VENKAT", email: "venkatsalapu99@gmail.com" },
  { id: "24FE5A0338", name: "SAMMETA ABHILASH", email: "sammetaabhilashabhi@gmail.com" },
  { id: "24FE5A0339", name: "SINGAMPALLI NIVESH", email: "nivesh709@gmail.com" },
  { id: "24FE5A0340", name: "SK NAGOOR VALI", email: "valinagoor347@gmail.com" },
  { id: "24FE5A0341", name: "SURLA VIJAYA SURYANARAYANA", email: "surlavijay15@gmail.com" },
  { id: "24FE5A0342", name: "TALABATTULA RAVITEJA", email: "ravisuresh432@gmail.com" },
  { id: "24FE5A0343", name: "TALLA SHANMUKHARAO", email: "talla.shanmukharao143@gmail.com" },
  { id: "24FE5A0344", name: "TARRA JASHUVA", email: "jacktarra18@gmail.com" },
  { id: "24FE5A0346", name: "THUNGA CHARAN KUMAR REDDY", email: "thungacharankumarreddy365@gmail.com" },
  { id: "24FE5A0347", name: "TIRUKOTI CHARAN", email: "tirukoticharan7777@gmail.com" },
  { id: "24FE5A0348", name: "USAR PRANESH", email: "upranesh2929@gmail.com" },
  { id: "24FE5A0349", name: "VARADA DURGA VENKATA SIVA CHAITANYA SRINIVAS", email: "varadasrinivas198@gmail.com" },
  { id: "24FE5A0401", name: "GALLE VIJAY", email: "vijaygalle0001@gmail.com" },
  { id: "24FE5A0402", name: "GORIPARTI SRI KANAKA DURGA", email: "goriparthisrikanakadurga@gmail.com" },
  { id: "24FE5A0403", name: "GUNDRU NARESH", email: "nareshgundru9154@gmail.com" },
  { id: "24FE5A0404", name: "KANKANALAPATI YASWANTH", email: "yaswanthkankanalapati123@gmail.com" },
  { id: "24FE5A0405", name: "KODALI NAGA VEERA BHAVANI", email: "kodalibhavani2004@gmail.com" },
  { id: "24FE5A0406", name: "KUKKAMALLA RISHITHA", email: "krishitha0666@gmail.com" },
  { id: "24FE5A0407", name: "MEKATHOTI RATNA VAMSI", email: "ratnavamsi882@gmail.com" },
  { id: "24FE5A0408", name: "NENAVATH MAHENDRA BABU", email: "mahendranenavath3@gmail.com" },
  { id: "24FE5A0409", name: "PALEPU TEJESH", email: "paleputejesh@gmail.com" },
  { id: "24FE5A0410", name: "PATHAN ASHI", email: "pathanashi06@gmail.com" },
  { id: "24FE5A0411", name: "PATHURI KOUSHIK KARUN", email: "koushikpathuriofficial@gmail.com" },
  { id: "24FE5A0412", name: "PILLUTLA SAI SANJANA", email: "saisanjana172005@gmail.com" },
  { id: "24FE5A0413", name: "RUDRU HARSHAVARDHAN", email: "harshavardhanrudru191@gmail.com" },
  { id: "24FE5A0414", name: "ALAPATI LEELA VENKATA SAI", email: "leelasaia001@gmail.com" },
  { id: "24FE5A0415", name: "SHAIK MAGDUM", email: "magdumshaik082005@gmail.com" },
  { id: "24FE5A0416", name: "SHAIK SHAPHEER", email: "shaikshapheer@gmail.com" },
  { id: "24FE5A0417", name: "VATTIGUNTA VENKATESWARLU", email: "venkyvattigunta@gmail.com" },
  { id: "24FE5A0418", name: "VURAYAMINI", email: "vurayamini2006@gmail.com" },
  { id: "24FE5A0419", name: "KUKKALA HIRANYA", email: "khiranyareddy87@gmail.com" },
  { id: "24FE5A0420", name: "SANDU RAHUL", email: "sandhurahul52005@gmail.com" },
  { id: "24FE5A0421", name: "PAPPU BHUVANESWARI", email: "bhuvana.p982005@gmail.com" },
  { id: "24FE5A0501", name: "ADUGULA RAJESH KUMAR", email: "rajeshkumaradugula2084@gmail.com" },
  { id: "24FE5A0502", name: "BANKA BLESSY ANGEL", email: "blessyangelbanka@gmail.com" },
  { id: "24FE5A0503", name: "DUVVARAPU BHAVANI SANKAR", email: "dbs232004@gmail.com" },
  { id: "24FE5A0504", name: "GAJJARAPU SRI VEENA TEJASWINI", email: "sriveenatejaswinigajjarapu@gmail.com" },
  { id: "24FE5A0505", name: "GOTTAM PREMKUMAR", email: "premkumargottam97030@gmail.com" },
  { id: "24FE5A0507", name: "JAMI MEGHANA", email: "meghanajami54@gmail.com" },
  { id: "24FE5A0508", name: "KALAPU VENKATA SATYA NAGENDRA MANI VARMA", email: "manivarmakalapu@gmail.com" },
  { id: "24FE5A0509", name: "KATTUPALLI ABHIGNA", email: "abhignakattupalli@gmail.com" },
  { id: "24FE5A0510", name: "KOKKILIGADDA CHANDU", email: "kokkiligaddachandu56@gmail.com" },
  { id: "24FE5A0511", name: "LANKOJI LEELA VENKATA PARAMESWARI", email: "leelalankoji@gmail.com" },
  { id: "24FE5A0512", name: "MEKALA TIRUPATHAMMA", email: "tirupathammam631@gmail.com" },
  { id: "24FE5A0514", name: "MUNIPALLI SANTHOSH", email: "santhoshmunipalli@gmail.com" },
  { id: "24FE5A0520", name: "SHAIK MOHAMMAD THOUSIF", email: "skthousif47@gmail.com" },
  { id: "24FE5A0522", name: "TULLIMILLI ESWAR VENKAT SESHU", email: "eswarvenket@gmail.com" },
  { id: "24FE5A0525", name: "DEVARAKONDA VENKATA RAMANA", email: "devarakondavenkataramana329@gmail.com" },
  { id: "24FE5A1201", name: "BUDDAVARAPU VAYANANDANA", email: "vayanandanabud@gmail.com" },
  { id: "24FE5A1203", name: "JANGILI SIVA LEELA", email: "sivaleelajangili53@gmail.com" },
  { id: "24FE5A1204", name: "KUNCHAKARLA VIJAY KUMAR", email: "kunchakarlavijay9966@gmail.com" },
  { id: "24FE5A1206", name: "SHAIK RIHAN", email: "rihan.shaik31278e@gmail.com" },
  { id: "24FE5A1207", name: "VELPULA MAHESH BABU", email: "velpula161@gamil.com" },
  { id: "24FE5A4202", name: "BATTHULA ESHWAR", email: "batthulaeshwar2006@gmail.com" },
  { id: "24FE5A4203", name: "PALAPARTHI MOUNIKA", email: "mounikapalaparthi56@gmail.com" },
  { id: "24FE5A4204", name: "RACHABATHUNI LALITHA", email: "lalli11230895@gmail.com" },
  { id: "24FE5A4206", name: "VANUM KRISHNA TEJA", email: "krishnateja0970@gmail.com" },
  { id: "24FE5A4207", name: "PEDAPUDI YASWANTH", email: "pedapudiyaswanth001@gmail.com" },
  { id: "24FE5A4301", name: "ARAVEETI SHIVAKOTESWARAO", email: "sivaaraveeti12@gmail.com" },
  { id: "24FE5A4302", name: "BIKKI DEEPIKA", email: "deepikabikki81@gmail.com" },
  { id: "24FE5A4303", name: "DANABOYINA VENKATESWARA RAO", email: "danaboinavenkatesh14@gmail.com" },
  { id: "24FE5A4304", name: "PATHAN RAHIMA KHATUN", email: "pathanrahima2004@gmail.com" },
  { id: "24FE5A4305", name: "RAVULAPALLI PAVAN KUMAR", email: "ravulapallipavankumar@gmail.com" },
  { id: "24FE5A4306", name: "VEMURI NAGA KRISHNA BRAHMANANDA BABU", email: "v.chintu2245@gmail.com" },
  { id: "24FE5A4402", name: "ILASAGARAPU SRIRAM", email: "sriramilasagarapu@gmail.com" },
  { id: "24FE5A4403", name: "MOPARTHI VIJAYAKUMARI", email: "vijayamoparthi131@gmail.com" },
  { id: "24FE5A4404", name: "PASUPULETI KRISHNA KUMARI", email: "krishnakumari.p2627@gmail.com" },
  { id: "24FE5A4405", name: "REDDYMALLI MOHAN RAGHAVENDRA REDDY", email: "raghavareddy22660@gmail.com" },
  { id: "24FE5A4406", name: "SHAIK MAHAMOOD ANZAR", email: "skmahamoodanzar@gmail.com" },
  { id: "24FE5A4407", name: "VINNAKOTA HIMA NAGA KARTHIKEYA", email: "dsstudent.karthikeya@gmail.com" },
  { id: "24FE5A6101", name: "BELLAMKONDA MADHUHA", email: "madhubellamkonda18@gmail.com" },
  { id: "24FE5A6103", name: "GOVATHOTI DHARANI", email: "govathotidharani2004@gmail.com" },
  { id: "24FE5A6105", name: "SUROJU TEJA", email: "surojuteja77@gmail.com" },
  { id: "24FE5A6106", name: "THAMMISETTI SNEHARSHA", email: "sneharshathammisetty@gmail.com" },
  { id: "24FE5A6107", name: "CHAVA ROHAN VASUDEVA", email: "vasudeva7210@gmail.com" },
  { id: "23FE1A0240", name: "MYLA JHANSI", email: "mylajhansi63@gmail.com" },
  { id: "23FE1A0249", name: "Sai Chandrika Puligadda", email: "puligaddasaichandrika@gmail.com" },
  { id: "23FE1A0260", name: "SHAIK ARSHNAZ", email: "arshnazsk613@gmail.com" },
  { id: "23FE1A0264", name: "Shaik.Noorjahan", email: "noorjahansk006@gmail.com" },
  { id: "23FE1A0212", name: "BHAVANASI VENKATA SUVARSHITA", email: "suvarshithabhavanasi@gmail.com" },
  { id: "23FE1A0213", name: "Bobbili Chakri", email: "bobbilichakri79@gmail.com" },
  { id: "23FE1A0214", name: "BURRAMUKKU TEJESWINI REDDY", email: "tejeswinireddyburramukku@gmail.com" },
  { id: "23FE1A0217", name: "CHEERAPUREDDY JYOTHSNA", email: "cheerapureddyjyothsna@gmail.com" },
  { id: "23FE1A0239", name: "MADALA HANITHA", email: "hanithamadala9@gmail.com" },
  { id: "23FE1A0241", name: "Nannepaga Sameera", email: "sameeranannapaga@gmail.com" },
  { id: "23FE1A0242", name: "Padarthi Sai Mohana Sruthi", email: "mohanasruthi1204@gmail.com" },
  { id: "23FE1A0246", name: "NADENDLA VISHNUPRIYA", email: "nadendlavishnu@gmail.com" },
  { id: "23FE1A0247", name: "Nandini.ponugeti", email: "nandinireddy75730@gmail.com" },
  { id: "23FE1A0248", name: "Potharlanka Hinduja", email: "hindujapotharlanka@gmail.com" },
  { id: "23FE1A0259", name: "Shaik Afrin", email: "afrinshaik2812@gmail.com" },
  { id: "23FE1A0262", name: "Nasreen shaik", email: "nasreenshaik7863@gmail.com" },
  { id: "23FE1A0265", name: "Shaik sulthana alhuda", email: "alhudashaik@gmail.com" },
  { id: "23FE1A0272", name: "Vani Sridevi Karamcheti", email: "vaniviswanadham1007@gmail.com" },
  { id: "23FE1A0273", name: "YENUMULA SINDHU PRIYA", email: "yenumulasindhupriya683@gmail.com" }
];

// ─── 2. QUESTION BANK DATA ───────────────────────────────────────────────────
const netQ = [
  { q: "A router has: 172.16.0.0/16 via Gi0/1 and 172.16.5.0/24 via Gi0/0. Packet destined for 172.16.5.10 — which interface?", opts: ["Gi0/1 — shorter match", "Gi0/0 — longest prefix match wins", "Both load-balance", "Packet dropped"], ans: 1, lv: "easy", exp: "Routers use longest prefix match. /24 is more specific than /16, so Gi0/0 wins." },
  { q: "Switch A has ports in VLAN 10 and VLAN 20 connecting to Switch B via one link. What must that link be?", opts: ["Access port VLAN 10", "Access port VLAN 20", "Trunk port — 802.1Q tagged frames for both VLANs", "Routed port"], ans: 2, lv: "easy", exp: "A trunk port uses 802.1Q tagging to carry multiple VLANs over one physical link." },
  { q: "OSPF routers on a broadcast segment elect DR and BDR. Which router becomes DR?", opts: ["Highest router-id", "Lowest router-id", "Most interfaces", "First Hello sender"], ans: 0, lv: "med", exp: "OSPF compares priority first (highest wins, default 1). On a tie, highest router-id (usually highest loopback) wins. Non-preemptive." },
  { q: "Host IP: 192.168.10.50/27. What is the broadcast address?", opts: ["192.168.10.63", "192.168.10.255", "192.168.10.62", "192.168.10.31"], ans: 0, lv: "med", exp: "/27 = 32 addresses. Subnet: .32. Range .33–.62. Broadcast = .63." },
  { q: "Which STP port state forwards frames AND learns MACs?", opts: ["Blocking", "Listening", "Learning", "Forwarding"], ans: 3, lv: "easy", exp: "Only Forwarding does both. Learning only learns MACs. Blocking and Listening do neither." },
  { q: "Best way to restrict Telnet to VTY lines from 10.0.0.0/8 only?", opts: ["Standard ACL inbound on WAN", "Extended ACL outbound on LAN", "Standard ACL on VTY lines using access-class", "Extended ACL blocking all other WAN traffic"], ans: 2, lv: "med", exp: "Use standard ACL with 'access-class' command on VTY lines — it filters by source IP for remote management." },
  { q: "EIGRP default active metric components?", opts: ["Hop count and delay", "Bandwidth and delay", "Bandwidth, delay, load, reliability, MTU", "Cost based on bandwidth only"], ans: 1, lv: "med", exp: "EIGRP has 5 K-values but by default only K1 (bandwidth) and K3 (delay) are active. Load/reliability disabled by default." },
  { q: "NAT overload (PAT) lets many hosts share one public IP. What uniquely identifies each session?", opts: ["Source IP only", "Destination IP only", "Source IP + Port number", "MAC address"], ans: 2, lv: "easy", exp: "PAT tracks sessions via source IP + source port, mapping each internal session to a unique port on the public IP." },
  { q: "Two switches — STP elects root bridge. Which switch wins?", opts: ["Most ports", "Lowest Bridge ID (priority + MAC)", "Highest MAC address", "First powered on"], ans: 1, lv: "easy", exp: "Root bridge = lowest Bridge ID. Bridge ID = priority (default 32768) + MAC. Lowest wins." },
  { q: "Frame arrives on Fa0/1. Destination MAC not in CAM table. What does switch do?", opts: ["Drops the frame", "Sends to default gateway", "Floods out all ports except incoming", "Sends ARP request"], ans: 2, lv: "easy", exp: "Unknown unicast flooding — switch forwards out all ports except source, waiting for destination to respond and populate CAM table." },
  { q: "Which IPv6 address type is equivalent to RFC 1918 private IPv4?", opts: ["Global Unicast 2000::/3", "Link-Local FE80::/10", "Unique Local FC00::/7", "Multicast FF00::/8"], ans: 2, lv: "med", exp: "Unique Local (FC00::/7) are routable within an org but not globally — analogous to 10.x, 172.16.x, 192.168.x." },
  { q: "OSPF Area 0 connects to Area 1. What router type sits between them?", opts: ["Internal router", "Backbone router", "Area Border Router (ABR)", "ASBR"], ans: 2, lv: "med", exp: "ABR connects two or more OSPF areas, maintaining separate LSDBs for each and summarizing routes between areas." },
  { q: "Administrative distance of OSPF?", opts: ["90", "110", "120", "170"], ans: 1, lv: "easy", exp: "OSPF AD=110. EIGRP internal=90, RIP=120, EIGRP external=170, eBGP=20." },
  { q: "5 departments need 25 hosts each. Subnet from 192.168.1.0/24 — what mask fits?", opts: ["/26 — 62 usable", "/27 — 30 usable", "/28 — 14 usable", "/25 — 126 usable"], ans: 1, lv: "med", exp: "/27 gives 30 usable hosts — smallest that fits 25. /28 only gives 14, which is insufficient." },
  { q: "Command to verify OSPF neighbor relationship on a Cisco router?", opts: ["show ip route ospf", "show ip ospf neighbor", "show ip protocols", "debug ip ospf events"], ans: 1, lv: "easy", exp: "'show ip ospf neighbor' lists all OSPF neighbors, their state (Full/2WAY), dead timer, and interface." },
];

const aptQ = [
  { q: "Train 150m long passes a pole in 15 sec. How long to pass a 300m platform?", opts: ["30 sec", "45 sec", "25 sec", "40 sec"], ans: 1, lv: "easy", exp: "Speed=150/15=10 m/s. Distance=150+300=450m. Time=450/10=45 sec." },
  { q: "Class: 40% girls. 30% boys and 40% girls passed an exam. What % of class passed?", opts: ["34%", "36%", "38%", "32%"], ans: 0, lv: "med", exp: "0.6×30 + 0.4×40 = 18+16 = 34%." },
  { q: "Statements: All buses are cars. Some cars are trucks. Which conclusion follows?", opts: ["Some buses are trucks", "Some trucks are buses", "Both follow", "Neither follows"], ans: 3, lv: "med", exp: "Trucks could be from non-bus cars. Neither conclusion definitely follows." },
  { q: "Man walks 5km North, 3km East, 5km South. Distance from start?", opts: ["3 km", "8 km", "5 km", "13 km"], ans: 0, lv: "easy", exp: "North and South cancel. He's 3km East. Distance = 3km." },
  { q: "Next term: 2, 6, 12, 20, 30, ?", opts: ["40", "42", "44", "46"], ans: 1, lv: "easy", exp: "Differences: 4,6,8,10,12. Next = 30+12 = 42." },
  { q: "Cost ₹1500, marked 40% above. 10% discount. Profit %?", opts: ["26%", "24%", "22%", "20%"], ans: 0, lv: "med", exp: "MP=1500×1.4=₹2100. SP=2100×0.9=₹1890. Profit=₹390. Profit%=390/1500×100=26%." },
  { q: "Cistern: A fills in 6hrs, B in 8hrs, C empties in 12hrs. All open together — hours to fill?", opts: ["4.8 hrs", "5 hrs", "4 hrs", "6 hrs"], ans: 0, lv: "med", exp: "Net per hr: 1/6+1/8−1/12 = 4/24+3/24−2/24 = 5/24. Time = 24/5 = 4.8 hrs." },
  { q: "If SWAN=5912, FAN=812, NIB=731 — what is 'A' coded as?", opts: ["7", "2", "1", "9"], ans: 2, lv: "easy", exp: "FAN=812 → F=8,A=1,N=2. SWAN=5912 → S=5,W=9,A=1,N=2. A=1." },
  { q: "P,Q,R,S,T sit in a row. Q right of P. R right of S. T left of S. Who is in the middle?", opts: ["Q", "R", "S", "P"], ans: 2, lv: "med", exp: "Order: T-S-R on one axis. Arranged as T-P-S-Q-R, S is consistently central." },
  { q: "Python: [x**2 for x in range(5) if x%2==0] — output?", opts: ["[0,4,16]", "[0,1,4,9,16]", "[1,9,25]", "[4,16]"], ans: 0, lv: "easy", exp: "Even numbers in range(5): 0,2,4. Squares: 0,4,16." },
];

const mcqCodeQ = [
  { q: "Time complexity of BFS on graph with V vertices and E edges?", opts: ["O(V)", "O(E)", "O(V + E)", "O(V × E)"], ans: 2, lv: "easy", exp: "BFS visits each vertex once O(V) and each edge once O(E). Total = O(V+E). Same for DFS." },
  { q: "Which data structure does BFS use internally?", opts: ["Stack", "Queue", "Priority Queue", "Deque"], ans: 1, lv: "easy", exp: "BFS uses a Queue (FIFO) to explore nodes level-by-level. DFS uses a Stack (LIFO)." },
  { q: "Shortest path in an unweighted graph — best algorithm?", opts: ["Dijkstra's", "BFS", "DFS", "Bellman-Ford"], ans: 1, lv: "easy", exp: "BFS guarantees shortest path (min edges) in unweighted graphs — explores all distance-k nodes before k+1." },
  { q: "Space complexity of adjacency matrix for V vertices?", opts: ["O(V)", "O(E)", "O(V²)", "O(V+E)"], ans: 2, lv: "easy", exp: "Adjacency matrix = V×V grid = O(V²). Adjacency list = O(V+E), better for sparse graphs." },
  { q: "Coin change (min coins for amount N) — best approach?", opts: ["Greedy — always largest coin", "DFS backtracking", "Dynamic Programming", "Binary search"], ans: 2, lv: "med", exp: "Greedy fails for some coin sets. DP guarantees optimal: O(N×coins). Classic DP problem." },
  { q: "Longest Increasing Subsequence — classic DP time complexity?", opts: ["O(N)", "O(N log N)", "O(N²)", "O(2^N)"], ans: 2, lv: "med", exp: "Classic DP = O(N²). There's also O(N log N) using binary search + patience sorting." },
  { q: "Which BST traversal gives elements in sorted ascending order?", opts: ["Pre-order", "In-order", "Post-order", "Level-order"], ans: 1, lv: "easy", exp: "In-order (Left → Root → Right) visits BST nodes in ascending sorted order." },
  { q: "Two stacks A=[1,2,3] top=3. Push all to B, then pop all from B. Output order?", opts: ["1,2,3", "3,2,1", "3,1,2", "2,1,3"], ans: 0, lv: "med", exp: "A pops 3,2,1 → pushed to B (top=1). Pop from B: 1,2,3. Double reversal restores original order." },
  { q: "Detect cycle in directed graph — best approach?", opts: ["BFS only", "DFS + visited[] only", "DFS + visited[] + rec_stack[]", "Union-Find"], ans: 2, lv: "med", exp: "For directed graphs, track rec_stack (current DFS path). A back edge to a rec_stack node = cycle. Union-Find works for undirected." },
  { q: "What is the recurrence for Kadane's Algorithm (max subarray)?", opts: ["dp[i] = dp[i-1] + nums[i]", "dp[i] = max(nums[i], dp[i-1] + nums[i])", "dp[i] = max(dp[i-1], dp[i-2] + nums[i])", "dp[i] = nums[i] + max(dp[i-1], 0)"], ans: 1, lv: "med", exp: "Kadane's: at each index, extend previous subarray OR start fresh. dp[i] = max(nums[i], dp[i-1]+nums[i])." },
];

const codingProblems = [
  {
    id: 0, topic: "array", lv: "easy", title: "Two Sum",
    link: "https://leetcode.com/problems/two-sum/",
    desc: "Given array nums and integer target, return indices of two numbers that add up to target. Exactly one solution exists.",
    examples: [{ i: "nums=[2,7,11,15], target=9", o: "[0,1]", e: "2+7=9" }, { i: "nums=[3,2,4], target=6", o: "[1,2]", e: "2+4=6" }],
    approach: "Hash map to store each number and index. For every number, check if (target−num) exists in map. Converts O(N²) to O(N).",
    code: `def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []\n\nprint(two_sum([2,7,11,15], 9))  # [0,1]`,
    tc: "O(N)", sc: "O(N)", tip: "Always think hash map when you need 'have I seen this?' — O(N²) → O(1) lookup.",
  },
  {
    id: 1, topic: "array", lv: "easy", title: "Maximum subarray sum (Kadane's)",
    link: "https://leetcode.com/problems/maximum-subarray/",
    desc: "Find the contiguous subarray with the largest sum and return its sum.",
    examples: [{ i: "nums=[-2,1,-3,4,-1,2,1,-5,4]", o: "6", e: "[4,-1,2,1]=6" }, { i: "nums=[1]", o: "1", e: "Single element" }],
    approach: "Maintain current_sum (best sum ending here) and max_sum (best overall). At each step: extend previous or start fresh.",
    code: `def max_subarray(nums):\n    cur = max_s = nums[0]\n    for num in nums[1:]:\n        cur = max(num, cur + num)\n        max_s = max(max_s, cur)\n    return max_s\n\nprint(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # 6`,
    tc: "O(N)", sc: "O(1)", tip: "Kadane's is DP in disguise. Recurrence: dp[i] = max(nums[i], dp[i−1]+nums[i]).",
  },
  {
    id: 2, topic: "graph", lv: "med", title: "Number of islands (BFS)",
    link: "https://leetcode.com/problems/number-of-islands/",
    desc: 'Given a 2D grid of "1"s (land) and "0"s (water), count the number of islands.',
    examples: [{ i: '[["1","1","0"],["0","1","0"],["0","0","1"]]', o: "2", e: "Two separate islands" }, { i: '[["1","1","1"],["0","1","0"],["1","1","1"]]', o: "1", e: "All land connected" }],
    approach: 'BFS flood fill: when you find an unvisited "1", increment count and BFS to mark all connected land as visited.',
    code: `from collections import deque\ndef num_islands(grid):\n    rows,cols=len(grid),len(grid[0]); count=0\n    def bfs(r,c):\n        q=deque([(r,c)]); grid[r][c]="0"\n        while q:\n            row,col=q.popleft()\n            for dr,dc in [(-1,0),(1,0),(0,-1),(0,1)]:\n                nr,nc=row+dr,col+dc\n                if 0<=nr<rows and 0<=nc<cols and grid[nr][nc]=="1":\n                    grid[nr][nc]="0"; q.append((nr,nc))\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c]=="1": count+=1; bfs(r,c)\n    return count`,
    tc: "O(M×N)", sc: "O(min(M,N))", tip: "Most reported Cisco Ideathon coding question. Master BFS flood fill — it covers islands, rotten oranges, maze shortest path.",
  },
  {
    id: 3, topic: "dp", lv: "med", title: "Coin change (minimum coins)",
    link: "https://leetcode.com/problems/coin-change/",
    desc: "Given coin denominations and amount, return minimum coins to make the amount. Return -1 if impossible.",
    examples: [{ i: "coins=[1,5,6,9], amount=11", o: "2", e: "6+5=11. Greedy gives 3 (wrong!)" }, { i: "coins=[2], amount=3", o: "-1", e: "Impossible" }],
    approach: "Bottom-up DP: dp[i] = min coins for amount i. dp[0]=0, rest = infinity. For each amount, try every coin.",
    code: `def coin_change(coins, amount):\n    dp = [float('inf')] * (amount+1)\n    dp[0] = 0\n    for amt in range(1, amount+1):\n        for coin in coins:\n            if coin <= amt:\n                dp[amt] = min(dp[amt], dp[amt-coin]+1)\n    return dp[amount] if dp[amount]!=float('inf') else -1\n\nprint(coin_change([1,5,6,9],11))  # 2`,
    tc: "O(amount×coins)", sc: "O(amount)", tip: "Greedy fails — always DP for coin change. Template: dp[0]=0, fill forward, answer is dp[amount].",
  },
  {
    id: 4, topic: "dp", lv: "med", title: "Longest Common Subsequence (LCS)",
    link: "https://leetcode.com/problems/longest-common-subsequence/",
    desc: "Given two strings s1 and s2, return length of their longest common subsequence.",
    examples: [{ i: 's1="ABCBDAB", s2="BDCABA"', o: "4", e: 'LCS="BCBA"' }, { i: 's1="AGGTAB", s2="GXTXAYB"', o: "4", e: 'LCS="GTAB"' }],
    approach: "2D DP: dp[i][j]=LCS of s1[:i] and s2[:j]. Match: +1 from diagonal. No match: max of left/top.",
    code: `def lcs(s1, s2):\n    m,n=len(s1),len(s2)\n    dp=[[0]*(n+1) for _ in range(m+1)]\n    for i in range(1,m+1):\n        for j in range(1,n+1):\n            if s1[i-1]==s2[j-1]: dp[i][j]=dp[i-1][j-1]+1\n            else: dp[i][j]=max(dp[i-1][j],dp[i][j-1])\n    return dp[m][n]\n\nprint(lcs("ABCBDAB","BDCABA"))  # 4`,
    tc: "O(M×N)", sc: "O(M×N)", tip: "LCS is foundational — underlies diff tools, DNA alignment. The 2D DP pattern recurs in edit distance, matrix chain multiplication.",
  },
  {
    id: 5, topic: "graph", lv: "med", title: "Detect cycle in directed graph",
    link: "https://leetcode.com/problems/course-schedule/",
    desc: "Given a directed graph, determine whether it contains a cycle. Return True/False.",
    examples: [{ i: "V=4, edges=[(0,1),(1,2),(2,3),(3,1)]", o: "True", e: "1→2→3→1 is a cycle" }, { i: "V=3, edges=[(0,1),(1,2)]", o: "False", e: "No back edges" }],
    approach: "DFS with visited + rec_stack. If DFS hits a node in rec_stack, a back edge (cycle) is found. Remove from rec_stack on backtrack.",
    code: `def has_cycle(V, edges):\n    graph={i:[] for i in range(V)}\n    for u,v in edges: graph[u].append(v)\n    visited=set(); rec_stack=set()\n    def dfs(node):\n        visited.add(node); rec_stack.add(node)\n        for nb in graph[node]:\n            if nb not in visited:\n                if dfs(nb): return True\n            elif nb in rec_stack: return True\n        rec_stack.discard(node); return False\n    for node in range(V):\n        if node not in visited:\n            if dfs(node): return True\n    return False`,
    tc: "O(V+E)", sc: "O(V)", tip: "visited alone is insufficient for directed graphs. rec_stack tracks the current DFS path — the key insight. (Note: LeetCode tests this via 'Course Schedule').",
  },
  {
    id: 6, topic: "string", lv: "easy", title: "Valid anagram",
    link: "https://leetcode.com/problems/valid-anagram/",
    desc: "Given strings s and t, return True if t is an anagram of s.",
    examples: [{ i: 's="anagram", t="nagaram"', o: "True", e: "Same char frequencies" }, { i: 's="rat", t="car"', o: "False", e: "Different chars" }],
    approach: "Frequency counter: count chars in s (increment), process t (decrement). If any count < 0, return False.",
    code: `def is_anagram(s, t):\n    if len(s)!=len(t): return False\n    freq={}\n    for c in s: freq[c]=freq.get(c,0)+1\n    for c in t:\n        if freq.get(c,0)==0: return False\n        freq[c]-=1\n    return True\n\nprint(is_anagram("anagram","nagaram"))  # True`,
    tc: "O(N)", sc: "O(1) — max 26 keys", tip: "Show the manual freq map in interviews — demonstrates hash map understanding, not just Python built-ins.",
  },
  {
    id: 7, topic: "string", lv: "med", title: "Longest substring without repeating characters",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    desc: "Find the length of the longest substring without repeating characters.",
    examples: [{ i: 's="abcabcbb"', o: "3", e: '"abc" length 3' }, { i: 's="pwwkew"', o: "3", e: '"wke" length 3' }],
    approach: "Sliding window with a hash set. Expand right — if char already in window, shrink from left. Track max window size.",
    code: `def length_of_longest(s):\n    char_set=set(); left=max_len=0\n    for right in range(len(s)):\n        while s[right] in char_set:\n            char_set.remove(s[left]); left+=1\n        char_set.add(s[right])\n        max_len=max(max_len, right-left+1)\n    return max_len\n\nprint(length_of_longest("abcabcbb"))  # 3`,
    tc: "O(N)", sc: "O(min(N,charset))", tip: 'Sliding window = any "longest/shortest subarray satisfying a condition" problem. Learn this pattern cold.',
  },
  {
    id: 8, topic: "tree", lv: "easy", title: "Maximum depth of binary tree",
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    desc: "Given root of a binary tree, return its maximum depth.",
    examples: [{ i: "[3,9,20,null,null,15,7]", o: "3", e: "Root→20→15 or Root→20→7" }, { i: "[1,null,2]", o: "2", e: "Path: 1→2" }],
    approach: "Recursive DFS: max depth = 1 + max(depth(left), depth(right)). Base case: None → return 0.",
    code: `def max_depth(root):\n    if not root: return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))\n\n# Build: [3,9,20,null,null,15,7]\n# root=TreeNode(3), root.left=TreeNode(9)\n# root.right=TreeNode(20,TreeNode(15),TreeNode(7))\n# max_depth(root) → 3`,
    tc: "O(N)", sc: "O(H)", tip: "Simplest tree recursion. Also know the BFS level-order approach — shows versatility in interviews.",
  },
  {
    id: 9, topic: "array", lv: "med", title: "Trapping rain water",
    link: "https://leetcode.com/problems/trapping-rain-water/",
    desc: "Given elevation map array, compute how much water can be trapped after raining.",
    examples: [{ i: "[0,1,0,2,1,0,1,3,2,1,2,1]", o: "6", e: "6 units trapped" }, { i: "[4,2,0,3,2,5]", o: "9", e: "9 units trapped" }],
    approach: "Two-pointer: maintain left_max and right_max. Water at i = min(left_max, right_max) − height[i]. Move pointer with smaller max inward.",
    code: `def trap(height):\n    l,r=0,len(height)-1\n    lm=rm=water=0\n    while l<r:\n        if height[l]<=height[r]:\n            if height[l]>=lm: lm=height[l]\n            else: water+=lm-height[l]\n            l+=1\n        else:\n            if height[r]>=rm: rm=height[r]\n            else: water+=rm-height[r]\n            r-=1\n    return water\n\nprint(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # 6`,
    tc: "O(N)", sc: "O(1)", tip: "Key insight: water at any index is bounded by min(max_left, max_right). Two-pointer eliminates need for prefix/suffix arrays.",
  },
  {
    id: 10, topic: "graph", lv: "med", title: "Shortest path in a maze (BFS)",
    link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    desc: "2D binary matrix: 0=open, 1=blocked. Find shortest path from (0,0) to (m-1,n-1). Return -1 if none.",
    examples: [{ i: "[[0,0,0],[1,1,0],[0,0,0]]", o: "5", e: "(0,0)→(0,1)→(0,2)→(1,2)→(2,2)" }, { i: "[[0,1],[1,0]]", o: "-1", e: "No valid path" }],
    approach: "BFS from start. BFS guarantees shortest path in unweighted grids. Queue stores (row, col, dist). Return dist at goal.",
    code: `from collections import deque\ndef shortest_path(maze):\n    m,n=len(maze),len(maze[0])\n    if maze[0][0]==1 or maze[m-1][n-1]==1: return -1\n    q=deque([(0,0,1)]); vis={(0,0)}\n    while q:\n        r,c,d=q.popleft()\n        if r==m-1 and c==n-1: return d\n        for dr,dc in [(-1,0),(1,0),(0,-1),(0,1)]:\n            nr,nc=r+dr,c+dc\n            if 0<=nr<m and 0<=nc<n and maze[nr][nc]==0 and (nr,nc) not in vis:\n                vis.add((nr,nc)); q.append((nr,nc,d+1))\n    return -1`,
    tc: "O(M×N)", sc: "O(M×N)", tip: "BFS = shortest path. DFS = connectivity/cycle. This distinction is critical in networking — Cisco engineers deal with routing paths constantly.",
  },
  {
    id: 11, topic: "dp", lv: "hard", title: "0/1 Knapsack",
    link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
    desc: "N items with weight and value. Knapsack capacity W. Max total value you can carry (each item: take or leave).",
    examples: [{ i: "values=[60,100,120], weights=[10,20,30], W=50", o: "220", e: "Items 2+3: weight=50, value=220" }, { i: "values=[1,2,3], weights=[4,5,6], W=5", o: "2", e: "Only item 2 fits" }],
    approach: "2D DP: dp[i][w] = max value using first i items with capacity w. For each item: skip (dp[i-1][w]) or take if fits.",
    code: `def knapsack(values, weights, W):\n    n=len(values)\n    dp=[[0]*(W+1) for _ in range(n+1)]\n    for i in range(1,n+1):\n        for w in range(W+1):\n            dp[i][w]=dp[i-1][w]\n            if weights[i-1]<=w:\n                take=dp[i-1][w-weights[i-1]]+values[i-1]\n                dp[i][w]=max(dp[i][w],take)\n    return dp[n][W]\n\nprint(knapsack([60,100,120],[10,20,30],50))  # 220`,
    tc: "O(N×W)", sc: "O(N×W)", tip: "Knapsack = parent of subset sum, partition equal subset, target sum. Pattern: for each item, take or skip, build table forward. (Note: LeetCode tests this via 'Partition Equal Subset Sum').",
  },
];

const techQ = [
  { q: "Explain the OSI model and function of each layer.", a: `7. Application — User-facing protocols (HTTP, FTP, SMTP, DNS)\n6. Presentation — Encryption, compression, data formatting (SSL/TLS)\n5. Session — Session management, synchronization (NetBIOS)\n4. Transport — End-to-end delivery, segmentation (TCP/UDP)\n3. Network — Logical addressing, routing (IP, OSPF, EIGRP)\n2. Data Link — MAC addressing, framing, error detection (Ethernet, 802.11)\n1. Physical — Bits over physical medium (cables, signals, NIC)\n\nMnemonic: "All People Seem To Need Data Processing"` },
  { q: "Difference between TCP and UDP — when to use each?", a: `TCP (Transmission Control Protocol):\n• Connection-oriented (3-way handshake: SYN→SYN-ACK→ACK)\n• Reliable — acknowledges every segment, retransmits on loss\n• Flow control + congestion control\n• Use for: HTTP/HTTPS, FTP, email, file transfer, SSH\n\nUDP (User Datagram Protocol):\n• Connectionless — no handshake overhead\n• Unreliable — no ACK, no retransmission\n• Low latency, minimal overhead\n• Use for: video streaming, VoIP, DNS, online gaming, real-time telemetry` },
  { q: "What is a deadlock? What are the four necessary conditions?", a: `A deadlock = two or more processes permanently waiting for resources held by each other — no progress is made.\n\nFour Coffman conditions (ALL must hold simultaneously):\n1. Mutual Exclusion — resources are non-shareable\n2. Hold and Wait — process holds a resource while waiting for another\n3. No Preemption — resources cannot be forcibly taken away\n4. Circular Wait — circular chain of processes, each waiting for the next\n\nPrevention: break any one condition (e.g., allow preemption, or require all resources upfront).` },
  { q: "Explain normalization — 1NF, 2NF, 3NF.", a: `Goal: reduce data redundancy, improve integrity.\n\n1NF (First Normal Form):\n• Atomic values — no arrays or repeating groups in columns\n• Each row uniquely identified (primary key)\n\n2NF (Second Normal Form):\n• 1NF + No partial dependency\n• Every non-key attribute depends on the WHOLE composite primary key\n\n3NF (Third Normal Form):\n• 2NF + No transitive dependency\n• Non-key attributes must depend only on the primary key, not on other non-key attributes\n\nBCNF: stricter version of 3NF — every determinant must be a candidate key.` },
  { q: "Four pillars of Object-Oriented Programming?", a: `1. Encapsulation — Bundle data + methods; hide internal state via private/protected access modifiers.\n\n2. Abstraction — Show only relevant details, hide implementation. Achieved via abstract classes and interfaces.\n\n3. Inheritance — Child class inherits properties/methods from parent. Promotes code reuse.\n\n4. Polymorphism — Same method name, different behavior.\n   • Compile-time: Method overloading\n   • Runtime: Method overriding` },
  { q: "What is virtual memory? How does paging work?", a: `Virtual memory lets a process use more memory than physically available, using disk (swap) as extension of RAM.\n\nPaging mechanism:\n• Physical memory → fixed-size frames\n• Logical (virtual) memory → equal-size pages\n• OS maintains page table: virtual page number → physical frame number\n• Page fault: required page not in RAM → OS loads it from swap space\n• TLB (Translation Lookaside Buffer): hardware cache of recent page table entries for fast lookup\n\nBenefit: process isolation, efficient multi-tasking, programs can exceed physical RAM.` },
  { q: "What happens when you type 'google.com' and press Enter?", a: `1. DNS Resolution — Browser checks local cache → OS cache → DNS resolver → recursive lookup → returns IP\n2. TCP Handshake — SYN → SYN-ACK → ACK with Google's server on port 443\n3. TLS Handshake — SSL/TLS negotiation, certificate verification, session key exchange\n4. HTTP Request — Browser sends: GET / HTTP/1.1, Host: google.com\n5. Server Processing — Load balancer → app servers → response generated\n6. HTTP Response — HTML, CSS, JS returned (compressed, cached headers set)\n7. Browser Rendering — Parse HTML → build DOM → fetch sub-resources → render\n8. Keep-Alive — Connection maintained for subsequent requests` },
  { q: "What is Cisco's SD-WAN? How does it differ from traditional WAN?", a: `SD-WAN (Software-Defined WAN) decouples control plane from hardware, managing WAN traffic centrally via software.\n\nTraditional WAN:\n• Router-centric, manual CLI config per device\n• MPLS-heavy, expensive, limited visibility\n\nCisco SD-WAN (Viptela platform):\n• Centralized management via vManage dashboard\n• Application-aware routing — directs traffic by app type\n• Supports MPLS, broadband, LTE simultaneously\n• Zero-touch provisioning, automated policy rollout\n• Integrated security: firewall, IPS, URL filtering\n• Cost reduction: replace MPLS with cheaper broadband + SD-WAN overlay` },
  { q: "Difference between a process and a thread?", a: `Process:\n• Independent program in execution with its own memory space\n• Heavyweight — expensive context switch\n• Crash of one process doesn't affect others\n• IPC via pipes, sockets, shared memory\n\nThread:\n• Lightweight unit within a process — shares parent's memory space\n• Faster context switching\n• One crashed thread can bring down the whole process\n• Used for concurrency within one program` },
  { q: "What is an index in a database? Types?", a: `An index = data structure that speeds up data retrieval without full table scan. Trade-off: faster SELECT, slower INSERT/UPDATE/DELETE.\n\nTypes:\n• Clustered Index — physically reorders table rows based on key. One per table.\n• Non-clustered Index — separate structure pointing to rows. Multiple per table.\n• Unique Index — enforces no duplicate values\n• Composite Index — index on multiple columns\n• Full-text Index — for text search\n• Covering Index — includes all columns needed by a query` },
];

const hrQ = [
  { q: "Tell me about yourself.", a: `Structure: Education → Skills → Projects → Why Cisco\n\nTemplate:\n"I'm a final-year B.Tech student in [branch] at [college]. I've specialized in computer networks and completed Cisco NetAcad's CCNA course. During my projects, I built [X] using [tech], which gave me hands-on exposure to [area]. I'm drawn to Cisco because of its mission to power an inclusive future and its leadership in networking, security, and cloud."\n\nTips:\n• Keep under 90 seconds\n• Always bridge to WHY Cisco specifically at the end\n• Mention your NetAcad credentials — they're relevant here` },
  { q: "Why do you want to work at Cisco specifically?", a: `Strong answer framework:\n• Mission: "Cisco's 'Powering an Inclusive Future for All' resonates — technology should bridge gaps."\n• Product respect: Mention Cisco tools you've used — Packet Tracer, CCNA, SD-WAN, Webex, Catalyst, Meraki\n• Growth: "Cisco invests in learning — certifications, mentorship, structured development programs."\n• Scale: "I want to work on infrastructure powering global enterprises, not just applications."\n\nAvoid: "It's a big MNC" or "Good salary." Show you know what Cisco actually builds and does.` },
  { q: "A startup offers 30% more salary than Cisco. Which do you choose?", a: `This is a discussion — show maturity, not just loyalty.\n\n"I'd weigh both carefully. Cisco offers:\n• Mentorship from world-class network engineers\n• Exposure to enterprise-scale systems early in career\n• CCIE/CCNP certification support — career-compounding value\n• Brand equity that opens doors globally\n• Stability and a well-defined growth path\n\nA startup's higher pay often comes with higher risk and less structured learning. Long-term career investment at Cisco outweighs the short-term pay gap for me."` },
  { q: "What is your greatest weakness?", a: `Rule: Choose a REAL weakness that is NOT a critical job skill, always include a growth story.\n\nExample:\n"I used to struggle with presenting in front of large groups — I'd over-prepare slides but freeze when fielding live questions. I recognized this and started volunteering for internal tech talks and participating in hackathons. I'm now comfortable presenting and defending ideas under pressure."\n\nAvoid:\n• "I work too hard" — sounds fake\n• "I have no weaknesses" — red flag\n• Anything that disqualifies you (e.g., "I'm weak in networking")` },
  { q: "Describe a situation where you solved a difficult technical problem (STAR method).", a: `STAR = Situation, Task, Action, Result\n\nExample:\nS: "During my final-year IoT project, our MQTT system was dropping 30% of packets under high load."\nT: "I was responsible for the communication layer and reliability."\nA: "I captured traffic with Wireshark, identified the broker was overwhelmed. I implemented QoS Level 1 policy and added a message queue buffer with retry logic."\nR: "Packet loss dropped from 30% to under 2%. The project won best presentation award in our department."\n\nKey: Cisco interviewers want to see your DEBUGGING THOUGHT PROCESS, not just the fix.` },
  { q: "Where do you see yourself in 5 years?", a: `"In five years, I see myself as a strong Cisco engineer who has grown beyond foundational networking into advanced areas like SD-WAN, network automation (Python/Ansible/Terraform), or network security.\n\nI'd like to have pursued my CCNP certification and potentially mentor junior engineers joining through programs like this Ideathon.\n\nMost importantly, I want to have contributed to at least one meaningful product or customer solution I can point to and say 'I built that.' Cisco's breadth — networking, cloud, security, collaboration — gives me the runway to grow."` },
  { q: "Name Cisco's competitors and why Cisco leads.", a: `Key competitors:\n1. Juniper Networks — enterprise routing/switching, strong in SP market\n2. Palo Alto Networks — next-gen firewall, SASE, cloud security\n3. Arista Networks — data center switching, cloud networking\n4. Huawei — global networking/telecom (restricted in some markets)\n5. Fortinet — network security, SD-WAN\n\nWhy Cisco leads:\n• Broadest portfolio: networking + security + collaboration + cloud\n• Largest installed enterprise base globally\n• Deep ecosystem: CCNA/CCNP/CCIE certification pipeline\n• Strong R&D + strategic acquisitions (Splunk, Meraki, AppDynamics, ThousandEyes)\n• Trusted by governments, hospitals, banks` },
  { q: "Tell me about a time you failed. What did you learn?", a: `Framework: Be honest. Don't blame others. Focus on what you did differently.\n\nExample:\n"In second year, I led a team project and underestimated integration time. We missed the submission deadline by a day. I learned that technical confidence isn't the same as project management skill.\n\nAfter that, I started using Kanban boards, broke deliverables into daily tasks, and built in 20% buffer time for integration. Every project since has been submitted on time or early.\n\nI'm now the person my peers come to for project planning — that failure became my biggest professional development moment."` },
];


// ─── 3. HELPER COMPONENTS ────────────────────────────────────────────────────
const lvStyle = (lv) => {
  if (lv === "easy") return { bg: "#dcfce7", color: "#166534" };
  if (lv === "med") return { bg: "#fef9c3", color: "#854d0e" };
  return { bg: "#fee2e2", color: "#991b1b" };
};

const lvLabel = (lv) => (lv === "easy" ? "Easy" : lv === "med" ? "Medium" : "Hard");

function Badge({ lv }) {
  const s = lvStyle(lv);
  return (
    <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6, fontWeight: 600, background: s.bg, color: s.color, display: "inline-block" }}>
      {lvLabel(lv)}
    </span>
  );
}

function TopicBadge({ label }) {
  return (
    <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6, fontWeight: 500, background: "#f1f5f9", color: "#475569", display: "inline-block" }}>
      {label}
    </span>
  );
}

function MCQCard({ q, idx, prefix, state, onAnswer }) {
  const id = `${prefix}_${idx}`;
  const [open, setOpen] = useState(false);
  const answered = state.answered[id];

  return (
    <div className="content-card">
      <div onClick={() => setOpen(o => !o)} style={{ padding: "14px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
            <Badge lv={q.lv} />
            {answered !== undefined && (<span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6, background: "#dcfce7", color: "#166534", fontWeight: 600 }}>✓ Answered</span>)}
          </div>
          <div className="card-header-text">Q{idx + 1}. {q.q}</div>
        </div>
        <span style={{ fontSize: 18, color: "#94a3b8", flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }}>▾</span>
      </div>

      {open && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "14px 18px 0" }}>
            {q.opts.map((opt, j) => {
              let bg = "rgba(255,255,255,0.05)", border = "1px solid rgba(255,255,255,0.1)", color = "#f8fafc", fw = 400;
              if (answered !== undefined) {
                if (j === q.ans) { bg = "#dcfce7"; border = "1px solid #86efac"; color = "#166534"; fw = 600; }
                else if (j === answered && answered !== q.ans) { bg = "#fee2e2"; border = "1px solid #fca5a5"; color = "#991b1b"; }
              }
              return (
                <button
                  key={j} disabled={answered !== undefined} onClick={(e) => { e.stopPropagation(); onAnswer(id, j, q.ans); }}
                  style={{ textAlign: "left", padding: "10px 14px", fontSize: 13.5, border, borderRadius: 8, background: bg, color, fontWeight: fw, cursor: answered !== undefined ? "default" : "pointer", lineHeight: 1.4, transition: "all 0.15s" }}
                >
                  {String.fromCharCode(65 + j)}. {opt}
                </button>
              );
            })}
          </div>
          {answered !== undefined && (
            <div style={{ margin: "12px 18px 18px", padding: "12px 16px", background: "rgba(59, 130, 246, 0.1)", borderLeft: "4px solid #3b82f6", borderRadius: "0 8px 8px 0", fontSize: 13, color: "#cbd5e1", lineHeight: 1.6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#60a5fa", letterSpacing: ".05em", marginBottom: 4 }}>EXPLANATION</div>
              {q.exp}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CodingCard({ p, viewed, onView }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("p");

  const handleToggle = () => {
    setOpen(o => !o);
    if (!viewed) onView(p.id);
  };

  return (
    <div className="content-card">
      <div onClick={handleToggle} style={{ padding: "14px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
            <Badge lv={p.lv} />
            <TopicBadge label={p.topic.charAt(0).toUpperCase() + p.topic.slice(1)} />
            {viewed && <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6, background: "#dcfce7", color: "#166534", fontWeight: 600 }}>👁 Viewed</span>}
          </div>
          <div className="card-header-text">{p.title}</div>
        </div>
        <span style={{ fontSize: 18, color: "#94a3b8", flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }}>▾</span>
      </div>

      {open && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.2)" }}>
            {[["p", "Problem"], ["s", "Solution"], ["a", "Approach"]].map(([t, label]) => (
              <button
                key={t} onClick={(e) => { e.stopPropagation(); setTab(t); }}
                style={{ padding: "10px 16px", fontSize: 13, cursor: "pointer", border: "none", background: "none", borderBottom: tab === t ? "2px solid #38bdf8" : "2px solid transparent", color: tab === t ? "#38bdf8" : "#94a3b8", fontWeight: tab === t ? 600 : 500, marginBottom: -1, transition: "all 0.15s" }}
              >
                {label}
              </button>
            ))}
          </div>

          <div style={{ padding: "16px 18px" }}>
            {tab === "p" && (
              <>
                <p style={{ fontSize: 13.5, color: "#e2e8f0", lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
                {p.examples.map((ex, i) => (
                  <div key={i} style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8, padding: "12px 14px", marginBottom: 10, fontSize: 13 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: ".05em", marginBottom: 6 }}>EXAMPLE {i + 1}</div>
                    <div style={{ fontFamily: "monospace", color: "#f8fafc", marginBottom: 2 }}>Input: {ex.i}</div>
                    <div style={{ fontFamily: "monospace", color: "#4ade80" }}>Output: {ex.o}</div>
                    <div style={{ fontSize: 12.5, color: "#94a3b8", marginTop: 4 }}>{ex.e}</div>
                  </div>
                ))}
              </>
            )}
            {tab === "s" && (
              <>
                <pre className="code-block" style={{ margin: 0 }}>{p.code}</pre>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
                  {[["Time complexity", p.tc], ["Space complexity", p.sc]].map(([label, val]) => (
                    <div key={label} style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8, padding: "10px 14px" }}>
                      <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 4, fontWeight: 500 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#f8fafc", fontFamily: "monospace" }}>{val}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {tab === "a" && (
              <>
                <div style={{ background: "rgba(56, 189, 248, 0.1)", borderLeft: "4px solid #38bdf8", borderRadius: "0 8px 8px 0", padding: "12px 16px", fontSize: 13.5, color: "#bae6fd", marginBottom: 14, lineHeight: 1.6 }}>
                  💡 {p.approach}
                </div>
                {p.link && (
                  <div style={{ marginBottom: 14 }}>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="practice-btn">
                      🚀 Practice this problem
                    </a>
                  </div>
                )}
                <div style={{ background: "rgba(250, 204, 21, 0.1)", border: "1px solid rgba(250, 204, 21, 0.3)", borderRadius: 8, padding: "12px 16px", fontSize: 13, color: "#fef08a", lineHeight: 1.5 }}>
                  ⭐ <strong>Interview tip:</strong> {p.tip}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function AccordionCard({ q, idx, id, viewed, onView }) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => { setOpen(o => !o); if (!viewed) onView(id); };

  return (
    <div className="content-card">
      <div onClick={handleToggle} style={{ padding: "14px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
        <div className="card-header-text" style={{ flex: 1 }}>Q{idx + 1}. {q.q}</div>
        <span style={{ fontSize: 18, color: "#94a3b8", flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }}>▾</span>
      </div>
      {open && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "16px 18px", background: "rgba(0,0,0,0.2)" }}>
          <pre style={{ fontSize: 13.5, color: "#cbd5e1", whiteSpace: "pre-wrap", fontFamily: "inherit", lineHeight: 1.7, margin: 0 }}>
            {q.a}
          </pre>
        </div>
      )}
    </div>
  );
}

// ─── 4. LOGIN COMPONENT ──────────────────────────────────────────────────────
function Login({ onLogin }) {
  const [identifier, setIdentifier] = useState("");
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const idInput = identifier.trim();
    const secretInput = secret.trim();

    // 1. Check if it is the Administrator
    if (idInput === "VLITSAdmin" && secretInput === "VLITSAdmin@01") {
      onLogin({ role: "admin", id: idInput, name: "Administrator" });
      return; // Exit the function early if admin logs in
    }

    // 2. If not Admin, check the Student Database
    const idUpper = idInput.toUpperCase();
    const emailLower = secretInput.toLowerCase();
    
    const student = INITIAL_STUDENTS.find(
      s => s.id === idUpper && s.email.toLowerCase() === emailLower
    );

    if (student) {
      onLogin({ role: "student", id: student.id, name: student.name });
    } else {
      // 3. Neither matched
      setError("Invalid credentials. Please check your ID and Password/Email.");
    }
  };

  return (
    <div className="theme-container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="glass-dashboard" style={{ width: "100%", maxWidth: "420px", padding: "36px" }}>
        <h2 className="dashboard-title" style={{ fontSize: "26px", marginBottom: "8px" }}>VLITS Portal Login</h2>
        <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "14.5px", marginBottom: "28px" }}>
          Sign in to access the Ideathon Question Bank
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ display: "block", fontSize: "12.5px", color: "#cbd5e1", marginBottom: "8px", fontWeight: 600, letterSpacing: "0.05em" }}>
              STUDENT ID
            </label>
            <input 
              type="text" 
              value={identifier} 
              onChange={(e) => setIdentifier(e.target.value)} 
              style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(15,23,42,0.8)", color: "#f8fafc", fontSize: "14.5px", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }} 
              required 
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "12.5px", color: "#cbd5e1", marginBottom: "8px", fontWeight: 600, letterSpacing: "0.05em" }}>
              REGISTERED EMAIL
            </label>
            <input 
              type="password" 
              value={secret} 
              onChange={(e) => setSecret(e.target.value)} 
              style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(15,23,42,0.8)", color: "#f8fafc", fontSize: "14.5px", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }} 
             
              required 
            />
          </div>
          
          {error && (
            <div style={{ background: "rgba(220, 38, 38, 0.15)", borderLeft: "4px solid #ef4444", padding: "10px 14px", fontSize: "13.5px", color: "#fca5a5", borderRadius: "0 8px 8px 0" }}>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            style={{ marginTop: "10px", width: "100%", padding: "14px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", color: "#ffffff", fontSize: "15.5px", fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 20px rgba(0,0,0,0.3)", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── 5. DASHBOARD COMPONENT ──────────────────────────────────────────────────
const MAIN_TABS = [
  { id: "net", label: "🌐 Networking" },
  { id: "apt", label: "🧠 Aptitude" },
  { id: "mcq-code", label: "☑️ Coding MCQs" },
  { id: "coding", label: "💻 Coding Problems" },
  { id: "tech", label: "⚙️ Technical" },
  { id: "hr", label: "👤 HR" },
];
const CODING_FILTERS = ["all", "array", "graph", "dp", "string", "tree"];

function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("net");
  const [codingFilter, setCodingFilter] = useState("all");
  const [answered, setAnswered] = useState({});
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [viewed, setViewed] = useState(new Set());

  const handleAnswer = useCallback((id, chosen, correctIdx) => {
    if (answered[id] !== undefined) return;
    setAnswered(prev => ({ ...prev, [id]: chosen }));
    setTotal(t => t + 1);
    if (chosen === correctIdx) setCorrect(c => c + 1);
  }, [answered]);

  const handleView = useCallback((key) => {
    setViewed(prev => {
      if (prev.has(key)) return prev;
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  }, []);

  const resetAll = () => {
    setAnswered({});
    setCorrect(0);
    setTotal(0);
    setViewed(new Set());
  };

  const totalAnsweredViewed = Object.keys(answered).length + viewed.size;
  const allQ = netQ.length + aptQ.length + mcqCodeQ.length + codingProblems.length + techQ.length + hrQ.length;
  const progress = Math.min(100, Math.round((totalAnsweredViewed / allQ) * 100));
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const filteredCoding = codingFilter === "all" ? codingProblems : codingProblems.filter(p => p.topic === codingFilter);

  return (
    <div className="theme-container">
      <div className="glass-dashboard">
        
        {/* User Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: "linear-gradient(135deg, #00c6ff, #0072ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#fff" }}>
              {user.name.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: 14, color: "#cbd5e1" }}>Welcome back,</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{user.name}</div>
            </div>
          </div>
          <button onClick={onLogout} style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#f8fafc", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.background="rgba(255,255,255,0.1)"} onMouseOut={(e)=>e.currentTarget.style.background="transparent"}>
            Log Out
          </button>
        </div>

        <h2 className="dashboard-title">Cisco Ideathon Prep Dashboard</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }}>
          {[{ val: "70+", label: "Total Questions", color: "#f8fafc" }, { val: totalAnsweredViewed, label: "Answered/Viewed", color: "#4ade80" }, { val: correct, label: "MCQs Correct", color: "#38bdf8" }, { val: pct + "%", label: "MCQ Accuracy", color: "#f472b6" }].map(({ val, label, color }) => (
            <div key={label} className="stat-box">
              <div style={{ fontSize: 24, fontWeight: 800, color }}>{val}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="progress-track"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24, justifyContent: "center" }}>
          {MAIN_TABS.map(({ id, label }) => (
            <button key={id} onClick={() => setActiveTab(id)} style={{ padding: "8px 16px", fontSize: 13.5, border: "none", borderRadius: 10, background: activeTab === id ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" : "rgba(255,255,255,0.1)", color: activeTab === id ? "#fff" : "#cbd5e1", cursor: "pointer", fontWeight: activeTab === id ? 600 : 500, boxShadow: activeTab === id ? "0 4px 6px -1px rgba(37, 99, 235, 0.4)" : "none", transition: "all .2s ease" }}>
              {label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
          <button onClick={resetAll} style={{ padding: "6px 14px", fontSize: 12.5, border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, background: "transparent", color: "#94a3b8", cursor: "pointer", fontWeight: 500 }}>↺ Reset all progress</button>
        </div>

        {activeTab === "net" && (<div>{netQ.map((q, i) => (<MCQCard key={i} q={q} idx={i} prefix="net" state={{ answered }} onAnswer={handleAnswer} />))}</div>)}
        {activeTab === "apt" && (<div>{aptQ.map((q, i) => (<MCQCard key={i} q={q} idx={i} prefix="apt" state={{ answered }} onAnswer={handleAnswer} />))}</div>)}
        {activeTab === "mcq-code" && (<div>{mcqCodeQ.map((q, i) => (<MCQCard key={i} q={q} idx={i} prefix="mc" state={{ answered }} onAnswer={handleAnswer} />))}</div>)}
        
        {activeTab === "coding" && (
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              {CODING_FILTERS.map(f => (
                <button key={f} onClick={() => setCodingFilter(f)} style={{ padding: "6px 12px", fontSize: 12.5, border: codingFilter === f ? "1px solid #38bdf8" : "1px solid rgba(255,255,255,0.2)", borderRadius: 8, background: codingFilter === f ? "rgba(56,189,248,0.15)" : "transparent", color: codingFilter === f ? "#38bdf8" : "#cbd5e1", cursor: "pointer", fontWeight: codingFilter === f ? 600 : 500, textTransform: "capitalize" }}>
                  {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
            {filteredCoding.map(p => (<CodingCard key={p.id} p={p} viewed={viewed.has("cp" + p.id)} onView={(id) => handleView("cp" + id)} />))}
          </div>
        )}

        {activeTab === "tech" && (<div>{techQ.map((q, i) => (<AccordionCard key={i} q={q} idx={i} id={`tech_${i}`} viewed={viewed.has(`tech_${i}`)} onView={handleView} />))}</div>)}
        {activeTab === "hr" && (<div>{hrQ.map((q, i) => (<AccordionCard key={i} q={q} idx={i} id={`hr_${i}`} viewed={viewed.has(`hr_${i}`)} onView={handleView} />))}</div>)}
      </div>
    </div>
  );
}

// ─── 5.5 ADMIN DASHBOARD COMPONENT ───────────────────────────────────────────
function AdminDashboard({ user, onLogout }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = INITIAL_STUDENTS.filter(s => 
    s.id.includes(searchTerm.toUpperCase()) || 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="theme-container">
      <div className="glass-dashboard" style={{ maxWidth: "1000px" }}>
        
        {/* User Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#fff" }}>
              A
            </div>
            <div>
              <div style={{ fontSize: 14, color: "#cbd5e1" }}>Welcome back,</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{user.name}</div>
            </div>
          </div>
          <button onClick={onLogout} style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#f8fafc", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.background="rgba(255,255,255,0.1)"} onMouseOut={(e)=>e.currentTarget.style.background="transparent"}>
            Log Out
          </button>
        </div>

        <h2 className="dashboard-title" style={{ background: "linear-gradient(to right, #a855f7, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Admin Control Panel
        </h2>

        {/* Stats & Search */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 15 }}>
          <div style={{ background: "rgba(139, 92, 246, 0.15)", border: "1px solid rgba(139, 92, 246, 0.3)", borderRadius: 12, padding: "12px 20px", display: "inline-block" }}>
            <span style={{ fontSize: 13, color: "#cbd5e1", marginRight: 8 }}>Total Registered Students:</span>
            <span style={{ fontSize: 20, fontWeight: 800, color: "#a855f7" }}>{INITIAL_STUDENTS.length}</span>
          </div>

          <input 
            type="text" 
            placeholder="Search by ID or Name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "300px", padding: "12px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(0,0,0,0.2)", color: "#f8fafc", fontSize: "14px", outline: "none" }}
          />
        </div>

        {/* Student Table */}
        <div className="content-card" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", minWidth: "600px" }}>
            <thead>
              <tr style={{ background: "rgba(0,0,0,0.3)" }}>
                <th style={{ padding: "14px 16px", textAlign: "left", color: "#94a3b8", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>#</th>
                <th style={{ padding: "14px 16px", textAlign: "left", color: "#94a3b8", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>STUDENT ID</th>
                <th style={{ padding: "14px 16px", textAlign: "left", color: "#94a3b8", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>STUDENT NAME</th>
                <th style={{ padding: "14px 16px", textAlign: "left", color: "#94a3b8", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>EMAIL (PASSWORD)</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? filteredStudents.map((student, index) => (
                <tr key={student.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", transition: "background 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.background="rgba(255,255,255,0.03)"} onMouseOut={(e)=>e.currentTarget.style.background="transparent"}>
                  <td style={{ padding: "14px 16px", color: "#cbd5e1" }}>{index + 1}</td>
                  <td style={{ padding: "14px 16px", color: "#a855f7", fontWeight: 700, letterSpacing: "0.05em" }}>{student.id}</td>
                  <td style={{ padding: "14px 16px", color: "#f8fafc", fontWeight: 500 }}>{student.name}</td>
                  <td style={{ padding: "14px 16px", color: "#4ade80" }}>{student.email}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="4" style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>No students found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

// ─── 6. MAIN APP EXPORT ──────────────────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState(null);

  // 1. If no user is logged in, render the Login screen.
  if (!user) {
    return <Login onLogin={(userData) => setUser(userData)} />;
  }

  // 2. If the Administrator logs in, render the Admin Control Panel.
  if (user.role === "admin") {
    return <AdminDashboard user={user} onLogout={() => setUser(null)} />;
  }

  // 3. Otherwise (Student logs in), render the Practice Dashboard.
  return <Dashboard user={user} onLogout={() => setUser(null)} />;
}