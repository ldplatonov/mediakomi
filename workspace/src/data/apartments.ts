export interface Apartment {
  id: number;
  description: string;
  area: number;
  rooms: number;
  floor: string;
  street: string;
  price: number;
  photos: string[];
}

export const apartments: Apartment[] = [
  {
    id: 1,
    description: "1-к. квартира, 30,7 м², 2/5 эт.",
    area: 30.7,
    rooms: 1,
    floor: "2/5",
    street: "ул. Горького",
    price: 149000,
    photos: [
      "https://b20.img.avito.st/image/1/1.EmRZCra-vo1PqhyMcT4hL2yqvIvrvbqN69rfh-cJvy_sqbw.-lmP__0lfZ9qQruVsBv94-9EqnuJq_0YxZiX3IheySo?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b10.img.avito.st/image/1/1.iYjJ3ra-JWHffodg15C4w_x-J2d7aSFhew5Ea3fdJMN8fSc.SgezzAw77iQWPZJOLPCX2mA8YWe_AvMwJrjX5pP6a-E?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 2,
    description: "3-к. квартира, 60 м², 2/5 эт.",
    area: 60,
    rooms: 3,
    floor: "2/5",
    street: "ул. Куратова",
    price: 500000,
    photos: [
      "https://80.img.avito.st/image/1/1.GcAR67a-tSkHSxcoL-N8jRJLty-jXLEpozvUI6_otIukSLc.tT4Ba_SFcQpqnXHIiMrkWNKSEiZ3hGB-M2N3wwXC4o4",
      "https://00.img.avito.st/image/1/1.k_9_cba-PxZp0Z0XVT_xsnzRPRDNxjsWzaFeHMFyPrTK0j0.E6IAYaCRo0QEbSeT1x3KyG81kRT3lldldHrp_fDS6yI?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 3,
    description: "2-к. квартира, 48,6 м², 8/9 эт.",
    area: 48.6,
    rooms: 2,
    floor: "8/9",
    street: "ул. Мира",
    price: 250000,
    photos: [
      "https://c80.img.avito.st/image/1/1.DKa-w7a-oE-oYwJOqtsro7xjokkMdKRPDBPBRQDAoe0LYKI.bQP_4n5hCPUXtaqoLSJsa7brfeyH55XSirleCISXY3c",
      "https://c90.img.avito.st/image/1/1.Oso4x7a-liMuZzQiQIsazzpnlCWKcJIjihf3KYbEl4GNZJQ.GLnEwq0bD0V4QiIsJX73jWcFUfgIVABvcL_qEWoImJs"
    ]
  },
  {
    id: 4,
    description: "3-к. квартира, 55 м², 2/5 эт.",
    area: 55,
    rooms: 3,
    floor: "2/5",
    street: "Полярная ул.",
    price: 169000,
    photos: [
      "https://30.img.avito.st/image/1/1.h5Kkjra-K3uyLol6pqjVp98sKX0WOS97Fl5KcRqNKtkRLSk.ZdFmR3csUZ2ZpwU1SadP2CZf3YyMMuC-9Lg2-htkQ7A?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://60.img.avito.st/image/1/1._a-a-ba-UUaMWfNH7Lrev-FbU0AoTlVGKCkwTCT6UOQvWlM.bVB1LPg0fMT_GILfGnKiDdGw9WJqoO7MJ94enSN4lRc"
    ]
  },
  {
    id: 5,
    description: "2-к. квартира, 45,7 м², 2/3 эт.",
    area: 45.7,
    rooms: 2,
    floor: "2/3",
    street: "ул. Мира",
    price: 1000000,
    photos: [
      "https://10.img.avito.st/image/1/1.y9JnqLa-ZztxCMU6fd_Y6kYIZT3VH2M71XgGMdmrZpnSC2U.kzEfWKX4iqBDgBAo5BL2_RdMkRPbRD4OGRM6ueP-Y_U?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://30.img.avito.st/image/1/1.Ir4rpLa-jlc9BCxWY6RGhwoEjFGZE4pXmXTvXZWnj_WeB4w.crXXl-5deK1taSLD4xqg4E7WrLLj_ayXaQEiGleOn4Y?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 6,
    description: "2-к. квартира, 50,4 м², 5/5 эт.",
    area: 50.4,
    rooms: 2,
    floor: "5/5",
    street: "ул. Мира",
    price: 150000,
    photos: [
      "https://b20.img.avito.st/image/1/1.TZKHm7a_4XuRO0N6kdZTxmk4530lPuF9QlvrcZE7Q3oxOA.98Ap3tlFjAwmP2l8bZkeFVvbChk-c5YWE-Ms96cUGqc?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://c80.img.avito.st/image/1/1.Ey9XR7a_v8ZB5x3HfQsNe7nkucD14r_Akoe1zEHnHcfh5A.kge0SyEFidhZB2BQi1Ms1rxXyZWkS9VHfTKkwR3gSh0"
    ]
  },
  {
    id: 7,
    description: "1-к. квартира, 24,6 м², 5/5 эт.",
    area: 24.6,
    rooms: 1,
    floor: "5/5",
    street: "ул. Мира",
    price: 250000,
    photos: [
      "https://b40.img.avito.st/image/1/1.ldkt_ba-OTA7XZsxC-fAwQpdOzafSj0wny1YOpP-OJKYXjs.XqrBKnnMhFcEzN3zEgi_caOfyNyVtg9VEkBsjnuGGCo",
      "https://50.img.avito.st/image/1/1.f0rGfLa-06PQ3HGitGlmaPvc0aV0y9ejdKyyqXh_0gFz39E.EIEYaqaNBoME5IVUhfPjeCM36gMJA0GEUV-I7CrbaS8"
    ]
  },
  {
    id: 8,
    description: "4-к. квартира, 84 м², 1/5 эт.",
    area: 84,
    rooms: 4,
    floor: "1/5",
    street: "ул. Мира",
    price: 1000000,
    photos: [
      "https://b40.img.avito.st/image/1/1.uzz4OLa-F9XumLXUghb6P8WYFdNKjxPVSuh230Y7FndNmxU.G1RiyQyF2VS_YIgauNeTEvM7MBFmCO9VoRUcBg-7u04",
      "https://b10.img.avito.st/image/1/1.AdzVfra-rTXD3g802zYQ3ujerzNnyak1Z67MP2t9rJdg3a8.nFZy1XvBmuYBvaQO4gxQWLko22vrufnP-5rrHPE6j_E?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 9,
    description: "1-к. квартира, 30,6 м², 4/5 эт.",
    area: 30.6,
    rooms: 1,
    floor: "4/5",
    street: "ул. Горького",
    price: 270000,
    photos: [
      "https://b30.img.avito.st/image/1/1.Y-P3Ora-zwrhmm0LvWdGi9yazQxFjcsKRequAEk5zqhCmc0.QXnl_MFFN94eJzAh9NKHHyffIiJW-4HjSl8fsMqiyFU?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://30.img.avito.st/image/1/1.wqZmk7a-bk9sM8xObrCDskwzbEnUJGpP1EMPRdiQb-3TMGw.vnV-RHshIKrSA4xr7cHfkaHQmhW5ue5wU60-_uQW3Wk?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 10,
    description: "2-к. квартира, 51 м², 5/5 эт.",
    area: 51,
    rooms: 2,
    floor: "5/5",
    street: "ул. Куратова",
    price: 450000,
    photos: [
      "https://b50.img.avito.st/image/1/1.XiluHLa-8sB4vFDBXjV8IFy88Mbcq_bA3MyTytAf82Lbv_A.KWbyy6wMGSp3xRSWLm2f0xkHZjeM93RcUqqsbs0saCk",
      "https://40.img.avito.st/image/1/1.p8UBIba-CywXgaktQxv68DOBCSqzlg8ss_FqJr8iCo60ggk.xUdR_3z_3gkMoHub9U7Yeu46HkUXAVNcr88mOzrBT6U"
    ]
  },
  {
    id: 11,
    description: "3-к. квартира, 68 м², 4/5 эт.",
    area: 68,
    rooms: 3,
    floor: "4/5",
    street: "Интинская ул.",
    price: 100000,
    photos: [
      "https://b50.img.avito.st/image/1/1.iylDrba-J8BVDYXBWafcClwNJcbxGiPA8X1Gyv2uJmL2DiU.DLlzoI1LCIudJuE0B2SxUbwPg08u_fIDQ9r2TzXUxCY",
      "https://b30.img.avito.st/image/1/1.mM9CCba-NCZUqZYnfhfh4l2pNiDwvjAm8NlJLPwKNYT3qjY.qZXTZ5oU9rxi0B_97kP_ITAzF0wEP5tllGvhtYFQudo?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 12,
    description: "1-к. квартира, 35,9 м², 2/5 эт.",
    area: 35.9,
    rooms: 1,
    floor: "2/5",
    street: "ул. Куратова",
    price: 250000,
    photos: [
      "https://00.img.avito.st/image/1/1.C-J1d7a-pwtj1wUKbyMZpxbWpQ3HwKMLx6fGAct0pqnA1KU.AEra3w-NjOyRsohr5u8jFqlb04FJI2r2szXxNXgYA5c?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://40.img.avito.st/image/1/1.CcxBOra-pSVXmgckXyYXliKbpyPzjaEl8-rEL_85pIf0mac.lyR1_B9O8Ubca9Nbrh9Zyp8z_jZN7J_ZBJwfB9WBw9s"
    ]
  },
  {
    id: 13,
    description: "2-к. квартира, 48 м², 3/5 эт.",
    area: 48,
    rooms: 2,
    floor: "3/5",
    street: "ул. Бабушкина",
    price: 270000,
    photos: [
      "https://00.img.avito.st/image/1/1.vKcBq7a_EE4XC7JPdbHL3-4IFkijDhBIxGsaRBcLsk-3CA.wG9Xc3MPSIPFghjn6GmtPdWAT-BbAM6cfz18G79hFy0?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://70.img.avito.st/image/1/1.PsZ0s7a_ki9iEzAuBKdJvpsQlCnWFpIpsXOYJWITMC7CEA.KgUIVIFBfjOXziafHYGv9TWirjciwbsTk2cS1EQVWzQ"
    ]
  },
  {
    id: 14,
    description: "3-к. квартира, 51,1 м², 5/9 эт.",
    area: 51.1,
    rooms: 3,
    floor: "5/9",
    street: "ул. Горького",
    price: 290000,
    photos: [
      "https://c60.img.avito.st/image/1/1.jmxMbra-IoVazoCEXFDWEF_OIIP-2SaF_r5Dj_JtIyf5zSA.ILPjPP2_p5v9lZ8UYyvBoXqLHcXQvTYl00Lcd4JIRBc",
      "https://b20.img.avito.st/image/1/1.BpHPe7a-qnjZ2wh5z08vksrbqH59zK54favLcnF4q9p62Kg.BE4vLOvRhY-_n40BuVlKc9Ei7Y3WpD3loyP545rgcOw?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 15,
    description: "2-к. квартира, 39,9 м², 5/5 эт.",
    area: 39.9,
    rooms: 2,
    floor: "5/5",
    street: "ул. Мира",
    price: 350000,
    photos: [
      "https://60.img.avito.st/image/1/1.5cNTGba-SSpFuesrFRLntlG4Syzhrk0q4ckoIO0aSIjmuks.Bxkd0g57o0oGajtycdMAHwYRPMW6jXlSkSCUztsV_jY",
      "https://10.img.avito.st/image/1/1.LfJsi7a-gRt6KyMaOrNThm4qgx3ePIUb3lvgEdKIgLnZKIM.Tf3DupqJxMWxOVroxA9uQcwz52gju37pfbOzzj9CxGI?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 16,
    description: "1-к. квартира, 33 м², 2/5 эт.",
    area: 33,
    rooms: 1,
    floor: "2/5",
    street: "ул. Куратова",
    price: 850000,
    photos: [
      "https://b30.img.avito.st/image/1/1.s4EIf7a-H2ge371pYnH7kD7fHW66yBtouq9-YrZ8Hsq93B0.-QNeYhawIvxX3n0FTNf6tGuNYgVnObWjuTBUwe_fGVU?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://40.img.avito.st/image/1/1.7hYhY7a-Qv83w-D-cUCOThnDQPmT1Eb_k7Mj9Z9gQ12UwEA.hZlxt6KvczTjime-ChIX0BIA2SQ1vbEaYnWeHvcgyfU"
    ]
  },
  {
    id: 17,
    description: "2-к. квартира, 45 м², 4/5 эт.",
    area: 45,
    rooms: 2,
    floor: "4/5",
    street: "ул. Мира",
    price: 200000,
    photos: [
      "https://b50.img.avito.st/image/1/1.AZB7v7a-rXltHw94dYNauzYer3_JCKl5yW_Mc8W8rNvOHK8.t23KlDHU2gC9n1s1vxJiRyIFForHyUEMcUBA3FIzcvs",
      "https://b50.img.avito.st/image/1/1.sZdsv7a-HX56H79_ArmbvCEeH3jeCBl-3m98dNK8HNzZHB8.OfwjDyPUAB27biWPDtJWhiUa-KieloVbTsMGtPUGowM"
    ]
  },
  {
    id: 18,
    description: "2-к. квартира, 51 м², 3/5 эт.",
    area: 51,
    rooms: 2,
    floor: "3/5",
    street: "ул. Мира",
    price: 880388,
    photos: [
      "https://c80.img.avito.st/image/1/1.qJZgRra-BH925qZ-PHz17XjmBnnS8QB_0pZldd5FBd3V5QY.SXLB047sehhqV88hkSGS7KPIqhSIQttzbQzaY_ek8R0",
      "https://60.img.avito.st/image/1/1.h1qemLa-K7OIOImynK6OP4Y4KbUsLy-zLEhKuSCbKhErOyk.rUHeoIr2ACwc3E_0gNaBgCPI58ArrYjw2LjcO9JhKIs"
    ]
  },
  {
    id: 19,
    description: "3-к. квартира, 58 м², 4/5 эт.",
    area: 58,
    rooms: 3,
    floor: "4/5",
    street: "ул. Куратова",
    price: 340000,
    photos: [
      "https://c70.img.avito.st/image/1/1.YvR65ba_zh1sRWwcMsAKluhGyBvYQM4bvyXEF2xFbBzMRg.exHUrQ6_Xgzhyl9MSgi6-yjuDMSdDj_emygqdV95tzY",
      "https://90.img.avito.st/image/1/1.LoowZ7a_gmMmxyBiYCtF6KLEhGWSwoJl9aeIaSbHIGKGxA.kzyJ6pcjah0nD0pvM4oRlIkXKrWwG1_gamsS2MWpvas"
    ]
  },
  {
    id: 20,
    description: "2-к. квартира, 48 м², 8/9 эт.",
    area: 48,
    rooms: 2,
    floor: "8/9",
    street: "ул. Горького",
    price: 550000,
    photos: [
      "https://b50.img.avito.st/image/1/1.NtRr07a-mj19czg8C_Mv809xmDvZZJ492QP7N9XQm5_ecJg.5npA-XzeyMWR8nzyj2e8A5BJgsEqRJC0L6ResrRstbI",
      "https://50.img.avito.st/image/1/1.qfPEm7a-BRrSO6cbmt3J1OA5Bxx2LAEadktkEHqYBLhxOAc.O6eFOhroPOcQUMWv9UTlUXAijMqyIUipTA5f1ul9fF4"
    ]
  },
  {
    id: 21,
    description: "2-к. квартира, 42,5 м², 3/5 эт.",
    area: 42.5,
    rooms: 2,
    floor: "3/5",
    street: "ул. Чайковского",
    price: 400000,
    photos: [
      "https://c80.img.avito.st/image/1/1.OvEOK7a-lhgYizQZdl8BzxSLlB68nJIYvPv3ErAol7q7iJQ.BbXBruVrqf807a_yPGULw6mn5CJcaHwXY_0lsd77alA",
      "https://b50.img.avito.st/image/1/1.ondeura-Dp5IGqyfFtSLSkQaDJjsDQqe7GpvlOC5DzzrGQw.uD1ITY_qu6kj2qxzOm6T_M2SsB6RoNrUBnB4k-0HEmM"
    ]
  },
  {
    id: 22,
    description: "2-к. квартира, 49,7 м², 4/5 эт.",
    area: 49.7,
    rooms: 2,
    floor: "4/5",
    street: "ул. Мира",
    price: 349000,
    photos: [
      "https://00.img.avito.st/image/1/1.E32tTLa-v5S77B2Vh2gPVLHsvZIf-7uUH5zenhNPvjYY770.Uh-v4NIxtdcTGAhUSJnSf66U68BIClT314tbnTx2tD8?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://00.img.avito.st/image/1/1.8H8ng7a-XJYxI_6XS9yzfwcjXpCVNFiWlVM9nJmAXTSSIF4.B9IJ3os96KPLHLkgdE30jNebe1iqQ4j5QvSRPX2a980?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 23,
    description: "3-к. квартира, 63,7 м², 3/9 эт.",
    area: 63.7,
    rooms: 3,
    floor: "3/9",
    street: "ул. Мира",
    price: 1250000,
    photos: [
      "https://50.img.avito.st/image/1/1.BXqcYba-qZOKwQuSmlVIfLzBq5Uu1q2TLrHImSJiqDEpwqs.vcRLgr-acU4mIVadbLkvRHe-brkBRTXH-fSZi5MH-uU",
      "https://70.img.avito.st/image/1/1.c6ndyba-30DLaX1Bt_AOrP1p3UZvfttAbxm-SmPK3uJoat0.IGCYYba8S-KPXAI4SU5K_6PpxtJn1Cj3Owid_3vqj2U"
    ]
  },
  {
    id: 24,
    description: "2-к. квартира, 44,6 м², 5/5 эт.",
    area: 44.6,
    rooms: 2,
    floor: "5/5",
    street: "ул. Мира",
    price: 180000,
    photos: [
      "https://30.img.avito.st/image/1/1.hn_EYra-KpbSwoiXxGTtd6DDKJB21S6WdrJLnHphKzRxwSg.boWRPUysR-XOKugSg-MjrAXsdUAPmI1g_-C0KxfPeOs?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b10.img.avito.st/image/1/1.g0XlW7a-L6zz-42t7xmaSIH6LapX7CusV4tOpltYLg5Q-C0.VfZRL2UIJadI5uyN3zJ_YOt0TLTBTRPT12InveRLtDo?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 25,
    description: "3-к. квартира, 69,4 м², 3/5 эт.",
    area: 69.4,
    rooms: 3,
    floor: "3/5",
    street: "Северная ул.",
    price: 400000,
    photos: [
      "https://20.img.avito.st/image/1/1.gEVbYLa-LKxNwI6tVw7fWkbALqrp1yis6bBNpuVjLQ7uwy4.NpN1We8xOx_0aqWIR9y5PjMW9yus1hA77fsoHg1VdX8?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b10.img.avito.st/image/1/1.tAX_cba-GOzp0brtm3fAGOLRGupNxhzsTaF55kFyGU5K0ho.O26QLjRW3sKxVIm_Zf3emsCXZ8eGPo6hBsmfHQJGedE?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 26,
    description: "2-к. квартира, 40 м², 3/5 эт.",
    area: 40,
    rooms: 2,
    floor: "3/5",
    street: "ул. Бабушкина",
    price: 500000,
    photos: [
      "https://b20.img.avito.st/image/1/1.tPSARra-GB2W5roc5HS-rILmGhsy8RwdMpZ5Fz5FGb815Ro.IpP4iVgTwpHgEmIf_QvzuJwr_EPyXciNhkGmxQE-ZnY?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b20.img.avito.st/image/1/1.rqx7cba-AkVt0aBEK2-n9HnRAEPJxgZFyaFjT8VyA-fO0gA.1SiHxw-m17gec6wDbzWNwOawe7oOvugue1HQ1yQ9-08?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 27,
    description: "2-к. квартира, 51,6 м², 1/5 эт.",
    area: 51.6,
    rooms: 2,
    floor: "1/5",
    street: "ул. Мира",
    price: 990000,
    photos: [
      "https://00.img.avito.st/image/1/1.6v_nT7a-Rhbx7-QXvxz7iuXvRBBV-EIWVZ8nHFlMR7RS7EQ.ie7_WQRGLPn23BtwgLRwK1KI3Fs1plYfDJOCJzEpjsw?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://c80.img.avito.st/image/1/1.o8v-fba-DyLo3a0jtCPMgPzdDSRMygsiTK1uKEB-DoBL3g0.aeqaK6J6TZOURQdgF_gcjtYuA3ep1kl2NopxEEPvC60"
    ]
  },
  {
    id: 28,
    description: "3-к. квартира, 70 м², 3/3 эт.",
    area: 70,
    rooms: 3,
    floor: "3/3",
    street: "ул. Мира",
    price: 650000,
    photos: [
      "https://b30.img.avito.st/image/1/1.RTfVPLa-6d7DnEvf0wU9VK6d69hni-3eZ-yI1Gs_6Hxgn-s.kUAfz-vThJ6V0mH0AlagqP8CeviDQYw52nWvvViNn08?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b00.img.avito.st/image/1/1.OB-RuLa-lPaHGDb37ZxbRvYZlvAjD5D2I2j1_C-7lVQkG5Y.Kuc2v6bHylCL6XudoCrVg01YxiwV1p0gxkcyEVHvV74?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 29,
    description: "3-к. квартира, 57 м², 5/5 эт.",
    area: 57,
    rooms: 3,
    floor: "5/5",
    street: "Воркутинская ул.",
    price: 1750000,
    photos: [
      "https://30.img.avito.st/image/1/1.gMnFc7a-LCDT044hySWd8f7TLiZ3xCggd6NNKntwLYJw0C4.GhuS9pE6o6A5-T_O-xKX9KrHoBqCNZTD_CyvIpqoXNY?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b30.img.avito.st/image/1/1.8mMqWLa-Xoo8-PyLQm_oWxH4XIyY71qKmIg_gJRbXyif-1w.4WDDR_8FL-vlBAyEGJ0cszjzJBV99G9JXMxogRtJ78E?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 30,
    description: "1-к. квартира, 31,3 м², 4/5 эт.",
    area: 31.3,
    rooms: 1,
    floor: "4/5",
    street: "ул. Мира",
    price: 120000,
    photos: [
      "https://40.img.avito.st/image/1/1.Yfw-Cra-zRUoqm8UcGMXzRarzxOMvckVjNqsH4AJzLeLqc8.PG9NLTpQCavso5-zDh8ICEF2EpcWlUKh6xa0SV6h5tc",
      "https://40.img.avito.st/image/1/1.kADy97a-POnkV57o3pXqMdpWPu9AQDjpQCdd40z0PUtHVD4.esvwAXOMLsqMF9P_76Aim8LYFG_ktXhuKYNokGrGzVc"
    ]
  },
  {
    id: 31,
    description: "2-к. квартира, 47,4 м², 4/5 эт.",
    area: 47.4,
    rooms: 2,
    floor: "4/5",
    street: "ул. Мира",
    price: 700000,
    photos: [
      "https://c70.img.avito.st/image/1/1.c4R6g7a_321sI31sENJnl7Ag2WvYJt9rv0PVZ2wjfWzMIA.bua6HAnKtGQsz3RjOIkci_EcomHSwtIXz6GOfO_3q8E",
      "https://b00.img.avito.st/image/1/1.9GO7Wra_WIqt-vqL3wXgcHH5XowZ_1iMfppSgK36-osN-Q.OWYMCr9hpxnjQ0lS46j3g69WuFR9M-hYALILu_W0Pdo?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 32,
    description: "3-к. квартира, 53 м², 5/5 эт.",
    area: 53,
    rooms: 3,
    floor: "5/5",
    street: "ул. Мира",
    price: 350000,
    photos: [
      "https://b00.img.avito.st/image/1/1.DJmGxba-oHCQZQJxkuEn_J1lonY0cqRwNBXBejjGodIzZqI.6SJhPjp7ysR68A7Flyff268ZqozncHVXI_cfD08QkNQ?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://20.img.avito.st/image/1/1.WfQ9Zba-9R0rxVccA2xGkybF9xuP0vEdj7WUF4Nm9L-Ixvc.Zw_7-r9Ac37dK3I1k5fPHoeJdc_cXXi4So3OfiZbcgI?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 33,
    description: "2-к. квартира, 57,7 м², 5/5 эт.",
    area: 57.7,
    rooms: 2,
    floor: "5/5",
    street: "ул. Морозова",
    price: 150000,
    photos: [
      "https://60.img.avito.st/image/1/1.w_F0Hba_bxhivc0ZfhKiipy-aR7WuG8esd1lEmK9zRnCvg.ocCuCrXREf379jceaMiOioNErr8Su2htT4LU1Eny5P4",
      "https://c60.img.avito.st/image/1/._W0GDLa_UYQQrPOFcAOcFu6vV4KkqVGCw8xbjhCs84Wwrw.npxE3bO3lg9gs9MuumaU4a8aDhoI5GrnfsbPlN-K3uY"
    ]
  },
  {
    id: 34,
    description: "3-к. квартира, 69,6 м², 2/5 эт.",
    area: 69.6,
    rooms: 3,
    floor: "2/5",
    street: "Ленинградская ул.",
    price: 480000,
    photos: [
      "https://40.img.avito.st/image/1/1.IM_VBra-jCbDpi4nmQIz8-2njiBnsYgmZ9btLGsFjYRgpY4.3iWafpiZ_mgtr0roCcMTDH1TR-mTdARn9uy0g6xb5HY",
      "https://b00.img.avito.st/image/1/1.s9t5Eba-HzJvsb0zEzPn50GwHTTLphsyy8F-OMcSHpDMsh0.7ho0xFcNkHK59oGpeLOaWPMWSm3Fm4l7ayJkb6OGA6I?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  },
  {
    id: 35,
    description: "4-к. квартира, 84,1 м², 4/5 эт.",
    area: 84.1,
    rooms: 4,
    floor: "4/5",
    street: "ул. Куратова",
    price: 800000,
    photos: [
      "https://b40.img.avito.st/image/1/1.nZl4cba-MXBu0ZNxTk-02HvQM3bKxjVwyqFQesZyMNLN0jM._6inyr4RKP2lQpGybiNy49NwOFp191thDnFl7PSALRA",
      "https://10.img.avito.st/image/1/1.im8yRra-JoYk5oSHKjCvLjHnJICA8SKGgJZHjIxFJySH5SQ.-uUmWmK5ik46FR4Ob4JvVJjmfPOdRMtu6Qy7CEKWrBA?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs="
    ]
  }
];

export function getRandomApartments(count: number): Apartment[] {
  const shuffled = [...apartments].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
