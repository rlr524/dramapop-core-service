import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class DatabaseSeed {
  constructor(private prisma: PrismaService) {}

  async main() {
    const drama1 = await this.prisma.drama.upsert({
      where: { id: 1 },
      update: {},
      create: {
        title: "Extraordinary Attorney Woo",
        year: 2022,
        thumbnailURL:
          "https://en.wikipedia.org/wiki/Extraordinary_Attorney_Woo#/media/File:Strange_Lawyer_Woo_Young-woo.png",
        description:
          "Extraordinary Attorney Woo (Korean: 이상한 변호사 우영우) is a 2022 South Korean television series starring Park Eun-bin in the title role, along with Kang Tae-oh and Kang Ki-young. It follows Woo Young-woo, an autistic female rookie attorney hired by a major law firm in Seoul. Because she is different from her neurotypical peers, her manner of communication is seen by them as odd, awkward, and blunt. With each legal case and through her intelligence and photographic memory, she becomes an increasingly competent attorney and earns recognition from other legal professionals and appreciation from her clients.",
        seasons: 1,
        episodes: 16,
      },
    });
    const drama2 = await this.prisma.drama.upsert({
      where: { id: 2 },
      update: {},
      create: {
        title: "Start-Up",
        year: 2020,
        thumbnailURL:
          "https://en.wikipedia.org/wiki/Start-Up_(South_Korean_TV_series)#/media/File:Start-Up_2020.jpg",
        description:
          "Start-Up (Korean: 스타트업; RR: Seutateueop) is a South Korean television series starring Bae Suzy, Nam Joo-hyuk, Kim Seon-ho and Kang Han-na.[2] The series revolves around a woman who has dreams of becoming an entrepreneur like Steve Jobs, and her love triangle between a man who is secretly her first love and another man who is pretending to be her first love.",
        seasons: 1,
        episodes: 16,
      },
    });

    console.log({ drama1, drama2 });
  }
}
