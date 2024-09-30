"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const paymentLinks = {
  "10": "https://buy.stripe.com/test_00geVC122fOC7S0eUU",
  "15": "https://buy.stripe.com/test_14k5l2dOO0TI7S0cMN",
  "25": "https://buy.stripe.com/test_8wM6p6bGG0TIfkscMO"
};

export function DonationForm() {
  const [amount, setAmount] = useState<string>("15")

  const handleAmountClick = (value: string) => {
    setAmount(value)
  }

  const handleDonateClick = () => {
    window.open(paymentLinks[amount as keyof typeof paymentLinks], "_blank")
  }

  return (
    <div className="bg-white rounded-lg p-4 border-4 border-red-500 w-full"> {/* Added w-full */}
      <h3 className="text-3xl md:text-3xl font-bold mb-4 text-left text-red-500">
        ПОМОГИТЕ ЖЕНЩИНАМ,<br />ПОСТРАДАВШИМ ОТ{"\u00A0"}ДОМАШНЕГО НАСИЛИЯ
      </h3>
      <p className="text-base mb-3 text-left">
        Получить экстренное убежище, психологическую помощь, комплексное сопровождение и{"\u00A0"}вырваться из{"\u00A0"}замкнутого круга
      </p>
      <p className="text-base mb-3 text-left font-semibold">
        Подпишитесь на{"\u00A0"}ежемесячные пожертвования
      </p>
      <p className="text-base mb-12 text-left">
        Без вашей помощи они не{"\u00A0"}справятся
      </p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {Object.keys(paymentLinks).map((value) => (
          <Button
            key={value}
            variant={amount === value ? "default" : "outline"}
            onClick={() => handleAmountClick(value)}
            className={`w-full text-xl py-3 ${
              amount === value 
                ? "bg-red-500 text-white hover:bg-red-600" 
                : "bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-50"
            }`}
          >
            ${value}
          </Button>
        ))}
      </div>
      <Button 
        className="w-full bg-red-500 text-white hover:bg-red-600 mb-4 text-xl font-bold py-10 rounded-md"
        onClick={handleDonateClick}
      >
        Помочь сейчас!
      </Button>
      <p className="text-xs text-center">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <Link href="https://nasiliu.net/wp-content/uploads/2024/03/oferta-nn_eu.pdf" target="_blank" rel="noopener noreferrer" className="underline">
          офертой
        </Link>{" "}
        и{" "}
        <Link href="https://nasiliu.net/wp-content/uploads/2024/03/politika-konfidenczialnosti-nn_eu.pdf" target="_blank" rel="noopener noreferrer" className="underline">
          обработкой персональных данных
        </Link>{" "}
      </p>
    </div>
  )
}
