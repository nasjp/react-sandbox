import React, { FC } from "react";
import { Responsive, Segment, Header } from "semantic-ui-react";
import "./About.css";

const About: FC<{}> = () => (
  <>
    <Segment.Group>
      <Responsive as={Segment}>
        <Header>Biography</Header>
        <p>
          nas。元銀行員バックエンドエンジニア。25歳。男。
          大学生の頃に彼女の誕生日に HTML/CSS
          で90年代レベルのサイトを作って祝う。これがプログラミングの原体験。人生で初めて、能動的に勉強をした。
          しかし、それが好きであるとか、仕事にしたいという感覚はまるでなく、文系であるという残念な理由で、就職先から除外。
          銀行に新卒で入社。ひとつも楽しくなく、真に楽しいと思える仕事をしようと思い、プログラミングをふと思い出す。
          エンジニアとして、一念発起し、1年2ヶ月で転職。 Node.js を用いた Web
          アプリケーションの開発に従事。 Laravel を用いた Web
          アプリケーションの開発も合わせて担当。 現在は新たな職場に移り、 Go で
          to B 向け API サーバーの構築を行っている。
        </p>
      </Responsive>
    </Segment.Group>
  </>
);

export default About;
