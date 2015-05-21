
object Level1Code {

  // Returns "Hello World!"
  def helloWorld(): String = "Hello World!"

  // return a stream that contains every integer starting at 'start'
  def countFrom(start: Int): Stream[Int] = Stream.from(start)

  // return a stream that contains the square of every integer starting at 'start'
  def squaresFrom(start: Int): Stream[Int] = Stream.from(start).map(i => i * i)

  // return a stream that contains the product of factors from two streams
  def productOfStreams(aFactors: Stream[Int], bFactors: Stream[Int]): Stream[Int] = aFactors.zip(bFactors).map({ case (x, y) => x * y })

}