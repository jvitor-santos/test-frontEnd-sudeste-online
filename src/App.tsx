import { useEffect, useState } from 'react'

import { Card } from './components/Card'
import { Header } from './components/Header'
import { Carousel } from './components/Carousel'
import { ArticleCard } from './components/ArticleCard'
import { Tags } from './components/Tags'

interface Book {
  id: string
  volumeInfo: {
    title: string
    authors: string[]
    imageLinks: {
      thumbnail: string
    }
  }
}

interface GoogleBooksAPIResponse {
  items: Book[]
}

export function App() {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER')
      .then((response) => response.json())
      .then((data: GoogleBooksAPIResponse) => {
        setBooks(data.items || [])
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erro ao buscar livros:', error)
      })
  }, [])

  return (
    <div className="flex size-full min-h-screen flex-col items-center bg-white">
      <Header />
      <main className="flex size-full min-h-screen flex-col items-center">
        <section className="w-[960px] text-lg font-normal leading-7">
          <span>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum, e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
            <br />
            <br />
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado.
          </span>
        </section>
        <section className="flex w-[1174px] flex-col items-center justify-center pt-12">
          <span className="text-5xl font-extrabold text-green">“</span>
          <span className="text-center text-4xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua dollor sit
            amet aint.
          </span>
          <span
            className="text-5xl
         font-extrabold text-green"
          >
            ”
          </span>
        </section>
        <section className="flex w-[960px] flex-col">
          <div>
            <span className="text-lg font-normal">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos.
            </span>
          </div>
          <div className="flex w-[960px] flex-row justify-around pt-12 text-lg font-normal">
            <span>
              • Dollor sit amet abin coin said upper;
              <br />
              • Aint no sunfiun weri gasty non;
              <br />
              • Dollor sit amet abin coin said upper;
              <br />
              • Aint no sunfiun weri gasty non;
              <br />
              • Dollor sit amet abin coin said upper;
              <br />• Aint no sunfiun weri gasty non;
            </span>
            <span>
              • Aint no sunfiun weri gasty non;
              <br />
              • Dollor sit amet abin coin said upper;
              <br />
              • Aint no sunfiun weri gasty non;
              <br />• Dollor sit amet abin coin said upper;
            </span>
          </div>
        </section>
        <section className="flex flex-col items-center pt-12">
          <img src="/assets/png/roman-kraft.png" alt="roman kraft" />
          <span className="pt-4 text-xs font-extrabold">
            MINI-QUADROS FEITOS À MÃO
          </span>
          <span className="pt-1 text-xs font-normal">
            FONTE: NEW YORK TIMES
          </span>
        </section>
        <section className="flex w-[960px] flex-col pt-12">
          <span className="text-4xl font-extrabold">Aint oupt sain crays</span>
          <span className="pt-6 text-lg font-normal">
            Lorem Ipsum é simplesmente uma{' '}
            <a
              href="https://www.google.com"
              target="_blank"
              className="text-info"
              rel="noreferrer"
            >
              simulação de link
            </a>{' '}
            da indústria tipográfica e de impressos, e vem sendo utilizado desde
            o século XVI, quando um impressor desconhecido pegou uma bandeja de
            tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem
            Ipsum sobreviveu não só a cinco séculos. Lorem Ipsum é simplesmente
            uma simulação de texto da indústria tipográfica e de impressos, e
            vem sendo utilizado desde o século XVI.
          </span>
        </section>
        <section className="flex max-w-[1174px] py-12">
          {!loading && books.length > 0 && books[0].volumeInfo ? (
            <Carousel>
              {books.map((book) => (
                <div key={book.id} className="flex pr-9">
                  <Card
                    title={book.volumeInfo.title}
                    author={
                      book.volumeInfo.authors
                        ? book.volumeInfo.authors[0]
                        : 'Autor desconhecido'
                    }
                    thumbnail={
                      book.volumeInfo.imageLinks?.thumbnail ||
                      'https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg'
                    }
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            <p>Carregando ou sem resultados</p>
          )}
        </section>
        <section className="flex w-[960px] flex-col pt-12">
          <span className="text-4xl font-extrabold">Ipsum dollor amet</span>
          <span className="pt-6 text-lg font-normal">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos.
          </span>
        </section>
        <section className="flex flex-col gap-y-12 pt-12">
          <ArticleCard />
          <ArticleCard />
        </section>
        <section className="pt-12">
          <Tags />
        </section>
      </main>
    </div>
  )
}
