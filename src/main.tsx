import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Linkedin, Instagram, Mail } from 'lucide-react';
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, Label, PolarRadiusAxis, RadialBar, RadialBarChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Funil de processos seletivos"

const chartData = [
  { title: "Contato feito", counter: 137 },
  { title: "Entrevista agendada", counter: 23 },
  { title: "Entrevista realizada", counter: 16 },
  { title: "Entrevista técnica agendada", counter: 6 },
  { title: "Entrevista técnica realizada", counter: 6 },
  { title: "Teste concluído", counter: 4 },
]

const feedbackData = [
  { title: "Feedback", recived: 107, notRecived: 30 },
]

const chartConfigFeedback = {
  recived: {
    label: "Feedback recebido",
    color: "hsl(var(--chart-1))",
  },
  notRecived: {
    label: "Sem feedback",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const acceptanceRatio = [
  { title: "Contratação", declined: 136, accepted: 1 },
]

const chartConfigAcceptance = {
  declined: {
    label: "Descartado",
    color: "hsl(var(--chart-1))",
  },
  notRecived: {
    label: "Adimitido",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const articles = [
  {
    title: "Como está sua pesquisa de emprego?",
    description: "Recentemente, passei por uma experiência curiosa: fui promovido a cliente da empresa onde trabalhava. 😅 O projeto...",
    link: "https://www.tabnews.com.br/filipeleonelbatista/como-esta-sua-pesquisa-de-emprego-aprendizado-na-busca-por-novas-oportunidades"
  },
  {
    title: "Analisaram o meu linkedin e fiquei surpreso...",
    description: "Recebi um excelente e divertido feedback essa semana sobre meu perfil do LinkedIn e gostaria de compartilhar com vocês...",
    link: "https://www.tabnews.com.br/filipeleonelbatista/pedi-pra-alguem-analisar-o-meu-e-fiquei-surpreso"
  },
  {
    title: "Criando Métricas e Analisando Processos de contratação...",
    description: "Recentemente criei um artigo aqui no Tabnews falando sobre A Importância de Dedicar Tempo Integral à Procura de Emprego e...",
    link: "https://www.tabnews.com.br/filipeleonelbatista/do-artigo-a-pratica-criando-metricas-e-analisando-processos-na-minha-busca-por-oportunidades-profissionais"
  }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex w-full items-center justify-center'>
      <div className='container mt-4 max-w-xl'>

        <article className='flex flex-col gap-4 mb-6 p-4'>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Como foi minha pesquisa de empregos</h2>
          <a href="https://filipeleonelbatista.dev.br" className="flex items-center space-x-4 mt-4">
            <img src="https://github.com/filipeleonelbatista.png" alt="Filipe Batista | Frontend Developer | React Especialist | Typescript | Javascript" className="w-16 h-16 rounded-full" />
            <div>
              <h5 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Filipe de Leonel Batista</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer | React Especialist | Typescript | Javascript</p>
            </div>
          </a>

          <p className="mt-4 italic max-w-md text-gray-700 dark:text-gray-300">
            "Essa busca por emprego aconteceu em um momento tranquilo, no qual eu
            estava crescendo na empresa. Isso não teve muita importância, pois o
            contrato acabou, então fui colocado diante do mercado temido, novamente."
          </p>

          <hr />

          <Card>
            <CardContent className='my-4'>
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                TLDR;
              </h4>

              <ul className="mt-4 space-y-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>
                  <span className="font-semibold">Foto Headshot Profissional:</span> De preferência, use a mesma em todas as redes sociais.
                </li>
                <li>
                  <span className="font-semibold">Capa profissional nas redes:</span> Inclua links das plataformas nas quais deseja trabalhar.
                </li>
                <li>
                  <span className="font-semibold">Perfis em dois idiomas:</span> Configure seu perfil em Inglês como principal e Português como secundário, ou conforme sua preferência.
                </li>
                <li>
                  <span className="font-semibold">Invista no seu GitHub Readme:</span> Documente seus principais projetos da melhor forma possível.
                </li>
                <li>
                  <span className="font-semibold">Criação de conteúdo:</span> Publique em plataformas como LinkedIn, Tabnews, Dev.to, X, YouTube, Instagram, Facebook, TikTok. Escolha os canais onde deseja trabalhar com SEO orgânico.
                </li>
                <li>
                  <span className="font-semibold">Site pessoal:</span> Pense em SEO, compre um domínio, e se puder, crie um e-mail profissional ou um específico para esse objetivo.
                </li>
                <li>
                  <span className="font-semibold">Funil de recrutamento:</span> Use um sistema, diário pessoal ou outra ferramenta para anotar feedbacks e melhorar suas respostas com a ajuda de IA.
                </li>
                <li>
                  <span className="font-semibold">Gravação de entrevistas:</span> Transcreva áudios, analise com IA e melhore sua apresentação; registre perguntas frequentes.
                </li>
                <li>
                  <span className="font-semibold">Currículo com método STAR:</span> Organize suas experiências seguindo o método STAR (Situação, Tarefa, Ação, Resultado).
                </li>
                <li>
                  <span className="font-semibold">Meta de contatos:</span> Defina metas de contatos personalizados e mantenha disciplina no envio um a um.
                </li>
              </ul>
            </CardContent>
          </Card>


          <hr />

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Teve um momento em que eu escutei o depoimento de um colega da comunidade, que disse algo como ele se sentia frustrado por enviar 300 currículos e não ter sido chamado para nenhuma entrevista.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Isso me deixou com um pensamento latente sobre o assunto. Foi então que
            criei um sistema para guardar as métricas do processo seletivo e conto
            um pouco sobre esse processo, que ainda está em desenvolvimento,
            <a href="https://www.tabnews.com.br/filipeleonelbatista/do-artigo-a-pratica-criando-metricas-e-analisando-processos-na-minha-busca-por-oportunidades-profissionais" target='_blank' rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline mx-2">
              neste artigo
            </a>
            mas já está avançado. Tenho certeza de que me ajudou muito a conquistar
            meu emprego atual, e,
            <a href="https://www.tabnews.com.br/filipeleonelbatista/como-esta-sua-pesquisa-de-emprego-aprendizado-na-busca-por-novas-oportunidades" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline mx-2">
              neste link,
            </a> conto alguns resultados e falo sobre a frustração durante o processo.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Os resultados que tive foram os abaixo:
          </p>

          <Card>
            <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
              <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                <CardTitle>Métricas gerais</CardTitle>
                <CardDescription>
                  Mostrando os totais do período de junho a agosto de 2024:
                </CardDescription>
              </div>
              <div className="flex">
                <div
                  className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                >
                  <span className="text-xs text-muted-foreground">
                    Total de contatos
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    137
                  </span>
                </div>
                <div
                  className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                >
                  <span className="text-xs text-muted-foreground">
                    Média de contatos/dia
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    12
                  </span>
                </div>
                <div
                  className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                >
                  <span className="text-xs text-muted-foreground">
                    Média de horas dedicadas/dia
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    4,5
                  </span>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Funil de processo seletivo</CardTitle>
              <CardDescription>Junho - Agosto 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  margin={{
                    left: -20,
                  }}
                >
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="title"
                    type="category"
                    width={200}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Bar dataKey="counter" fill="var(--color-desktop)" radius={5} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Taxa de sucesso 0,73% <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Mostrando os totais do período de junho a agosto de 2024.
              </div>
            </CardFooter>
          </Card>


          <Card>
            <CardContent>
              <CardHeader className="items-center pb-0">
                <CardTitle>Feedbacks recebidos/não recebidos</CardTitle>
                <CardDescription>Junho - Agosto 2024</CardDescription>
              </CardHeader>
              <ChartContainer
                config={chartConfigFeedback}
              >
                <RadialBarChart
                  data={feedbackData}
                  endAngle={180}
                  innerRadius={80}
                  outerRadius={130}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 16}
                                className="fill-foreground text-2xl font-bold"
                              >
                                {(feedbackData[0].recived + feedbackData[0].notRecived).toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 4}
                                className="fill-muted-foreground"
                              >
                                Feedbacks
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </PolarRadiusAxis>
                  <RadialBar
                    dataKey="recived"
                    stackId="a"
                    cornerRadius={5}
                    fill="hsl(var(--chart-5))"
                    className="stroke-transparent stroke-2"
                  />
                  <RadialBar
                    dataKey="notRecived"
                    fill="hsl(var(--chart-1))"
                    stackId="a"
                    cornerRadius={5}
                    className="stroke-transparent stroke-2"
                  />
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Taxa de retorno de {((feedbackData[0].notRecived / feedbackData[0].recived) * 100).toFixed(2)}% <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Mostrando os totais do período de junho a agosto de 2024.
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="items-center pb-0">
              <CardTitle>Adimissão/Rejeitados</CardTitle>
              <CardDescription>Junho - Agosto 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfigAcceptance}
              >
                <RadialBarChart
                  data={acceptanceRatio}
                  endAngle={180}
                  innerRadius={80}
                  outerRadius={130}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 16}
                                className="fill-foreground text-2xl font-bold"
                              >
                                {((acceptanceRatio[0].accepted / acceptanceRatio[0].declined) * 100).toLocaleString()}%
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 4}
                                className="fill-muted-foreground"
                              >
                                Taxa de Aceitação
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </PolarRadiusAxis>
                  <RadialBar
                    dataKey="declined"
                    stackId="a"
                    cornerRadius={5}
                    fill="hsl(var(--chart-5))"
                    className="stroke-transparent stroke-2"
                  />
                  <RadialBar
                    dataKey="accepted"
                    fill="hsl(var(--chart-1))"
                    stackId="a"
                    cornerRadius={5}
                    className="stroke-transparent stroke-2"
                  />
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Taxa de sucesso 0,73% <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Mostrando os totais do período de junho a agosto de 2024.
              </div>
            </CardFooter>
          </Card>


          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Qual foi o aprendizado disso?
          </h4>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Antes de mais nada, te convido a se
            <a href="https://linkedin.com/in/filipeleonelbatista" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline mx-2">
              conectar no linkedin,
            </a>
            onde eu vou compartilhar muitas coisas a respeito de processos e como melhorar.
          </p>

          <p className="mt-4 italic text-gray-700 dark:text-gray-300">
            <b>Um pequeno desabafo.</b> (Suspiro de sofrimento)
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Para você ter um contexto, eu sou pai de gêmeos e casado,
            (porque a vida precisa de desafios 🤣) e imagine como fica a cabeça
            de alguém que recebe X e então passa a receber X/3 pelo seguro.
            Isso me deixou muito preocupado com o que iria acontecer.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Com isso, eu comecei a procurar emprego, conectando-me com recrutadores
            e sendo muito apoiado pela minha gerência na mesma empresa, que se
            esforçou muito para que eu continuasse na empresa.
            Agradeço muito pelo apoio.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Minha situação era de um <b>FUNCIONÁRIO REFERÊNCIA</b> da empresa em <b>5/6 </b>
            pontos avaliados pela empresa, com cultura na veia, mas uma coisa
            que bateu forte e foi dura foi que as vagas internas não estavam
            alinhadas com minhas techs.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Infelizmente, não consegui me realocar internamente e fui para o mercado.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            No mercado, fui percebendo um ponto importante, que quero trazer aqui:
            não tenha uma stack/tecnologia de estimação. Seja especialista em uma
            coisa e, depois, estude outras coisas.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Então, sou especialista em <b>REACT JS</b> e conhecedor de <b>React Native</b>,
            apesar de serem muito parecidos, mas cada um com suas nuances.
            Enfim, comecei a entender que eu precisaria voltar a ser fullstack
            ou focar em backend com <b>Java, Python, Node JS e talvez Ruby</b>.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Busquei treinamentos e aprendi bastante em <b>Java, Spring Boot, e Python Flask</b>,
            mas não sinto que estou preparado para desempenhar diretamente com
            essas tecnologias. No entanto, entendo e consigo fazer algumas operações.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Foi então que percebi que não entendia muitas coisas pelo nome, mas
            sabia fazer o que era necessário. Então, comecei a estudar e entender
            conceitos e me preparar para as entrevistas, pois muita coisa eu
            já entendia.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Com isso, tive alguns feedbacks. O primeiro eu conto mais
            <a href="https://www.tabnews.com.br/filipeleonelbatista/pedi-pra-alguem-analisar-o-meu-e-fiquei-surpreso" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline mx-2">
              neste artigo,
            </a>
            mas foi um ponto onde comecei a prestar atenção aos detalhes do meu
            portfólio e LinkedIn, que estavam meio largados, e minha imagem
            pessoal estava bem ruim. Foi então que minha esposa e meu pai me
            ajudaram a entender como melhorar minha imagem pessoal para causar
            uma melhor impressão.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Os principais feedbacks vêm de perto, basta você ter um momento para
            entender isso. Depois de compreender, minha esposa me preparou para
            algumas entrevistas, até indicando alguns cuidados com cabelo e
            vestuário para apresentar, mesmo em entrevistas remotas.
            Isso teve sua importância.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Outro feedback foi o de parar de atirar para todos os lados e focar
            onde você é bom. Isso foi duro de ouvir, vendo que as vagas estavam
            mais para Backend na época. Então, fui lá e foquei em
            <b> DESENVOLVEDOR FRONTEND e ESPECIALISTA REACT JS</b>.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Isso me ajudou a organizar meu LinkedIn, e então começaram a aparecer
            oportunidades na minha área, mas a maioria pedia requisitos ainda
            muito complexos para mim.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Acompanhando as métricas, acabei me frustrando muito, e isso é um ponto
            que eu preciso compartilhar com você. Se você não for forte de cabeça,
            os números vão te desmotivar muito. Tive esse feedback da minha analista.
            Se tiverem oportunidade, façam consultas com psicólogos para entender
            melhor esse tipo de coisa relacionada à mente.
          </p>

          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Tudo isso pra dizer que...
          </h4>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Isso foi um processo para mim. Compartilhei vários pontos que podem
            acabar trazendo algumas dicas do que você pode fazer por você.
            Você tem que entender que o cenário de cada um pode variar, e os
            resultados também. Se você se comparar com os outros, vai falhar.
            Busque se comparar com você mesmo, melhorar sua apresentação e
            analisar os números. Assim, você vai conseguir melhorar.
          </p>

          <hr />

          <div className='flex flex-col md:flex-row gap-4'>
            {
              articles.map((article, index) => (
                <Card key={index}>
                  <img className='rounded-t-xl' src="./tn.png" alt="Tabnews" />
                  <CardContent className='p-4 flex flex-col gap-4'>
                    <h6 className='font-bold text-sm mb-2'>{article.title}</h6>
                    <p className='text-xs mb-2'>{article.description}</p>
                    <a className='border hover:border-white transition-all cursor-pointer flex flex-row gap-2 items-center justify-center rounded-md p-2' href={article.link} target="_blank" rel="noreferer noopener">Ver artigo</a>
                  </CardContent>
                </Card>
              ))
            }
          </div>

          <hr />

          <footer className='flex w-full flex-col my-4 gap-2 items-center'>
            <h3 className='text-2xl'>Vamos nos conectar 😉</h3>
            <div className='flex flex-row gap-6'>
              <a
                className="hover:text-blue-500"
                href="https://www.linkedin.com/in/filipeleonelbatista/">
                <Linkedin size={24} />
              </a>
              <a
                className="hover:text-blue-500"
                href="mailto:filipe.x2016@gmail.com">
                <Mail size={24} />
              </a>
              <a
                className="hover:text-blue-500"
                href="https://instagram.com/filipeleonelbatista">
                <Instagram size={24} />
              </a>
            </div>
            <a href="https://filipeleonelbatista.dev.br" className="text-blue-600 dark:text-blue-400 underline mx-2">
              Desenvolvido 💜 por Filipe Batista
            </a>
          </footer>
        </article>
      </div>
    </div>
  </StrictMode>,
)
