defmodule FizzBuzz do
  def print(number) do
    cond do
      rem(number, 15) == 0 -> "FizzBuzz"
      rem(number, 3) == 0 -> "Fizz"
      rem(number, 5) == 0 -> "Buzz"
      rem(number, 7) == 0 -> "Whizz"
      true -> number
    end
  end
end

defmodule FizzBuzzTest do
  ExUnit.start()
  use ExUnit.Case

  describe "FizzBuzz" do
    test "prints the numbers 1 to 100" do
      assert 1 = FizzBuzz.print(1)
      assert 4 = FizzBuzz.print(4)
    end

    test "multiples of three prints Fizz" do
      assert "Fizz" = FizzBuzz.print(3)
      assert "Fizz" = FizzBuzz.print(9)
    end

    test "multiples of five prints Buzz" do
      assert "Buzz" = FizzBuzz.print(5)
      assert "Buzz" = FizzBuzz.print(10)
    end

    test "multiples of three or five prints FizzBuzz" do
      assert "FizzBuzz" = FizzBuzz.print(15)
      assert "FizzBuzz" = FizzBuzz.print(45)
    end
  end
end
