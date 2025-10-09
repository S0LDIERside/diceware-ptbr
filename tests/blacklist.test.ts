export const BLACKLIST = [
    // ========================
    // CRIANÇAS E MENORIDADE
    // ========================
    "criança",
    "menino",
    "menina",
    "garoto",
    "garota",

    // ========================
    // TERMOS SEXUAIS EXPLÍCITOS
    // ========================
    "sexo",
    "porno",
    "pornô",
    "cacete",
    "buceta",
    "rola",
    "anal",
    "sado",
    "transar",
    "transa",
    "orgia",
    "orgias",
    "vulva",
    "dildo",
    "pênis",
    "vagina",
    "foder",
    "fode",
    "fodeu",
    "punheta",

    // ========================
    // VIOLÊNCIA E CRIMES
    // ========================
    "estupro",
    "tortura",
    "canibal",
    "pedo",

    // ========================
    // IDENTIDADE E DISCRIMINAÇÃO
    // ========================
    "negro",
    "negra",
    "lésbica",

    // ========================
    // DROGAS
    // ========================
    "crack",
    "cocaína",
    "cocaina",
    "maconha",

    // ========================
    // XINGAMENTOS E PALAVRÕES
    // ========================
    "puta",
    "puto",
    "vadia",

    // ========================
    // DOENÇAS ESTIGMATIZADAS
    // ========================
    "aids",
    "cancer",
    "autista",
    "autismo",

    // ========================
    // RELIGIÕES E FIGURAS SAGRADAS
    // ========================
    "alcorão",
    "bíblia",
    "jesus",
    "cristo",
    "buda",
    "budismo",
    "budista",
    "satã",
    "cristão",
    "cristã",
    "judeu",
    "judia",
    "messias",
    "moisés",
    "maomé",

    // ========================
    // HISTÓRIA
    // ========================
    "adolf",
    "hitler",
    "stalin",
    "karl",
    "marx",
    "dilma",
    "nazi",
    "putin",
    "nazismo",
    "escravo",
    "escrava",
    "servo",

    // ========================
    // MARCAS
    // ========================
    "pepsi",
    "erorex",
    "durex",
    "nike",
    "adidas",
    "coca",

    // ========================
    // OUTROS
    // ========================
    "suicida"
]

import { expect, test } from "vitest"
import { dicewarePTBR } from "../src"

test("List should not contain words that depending on the context may be problematic", () => {

    const problematicWords: string[] = []

    dicewarePTBR.words.forEach((word) => {
        if (BLACKLIST.includes(word.toLowerCase())) {
            problematicWords.push(word)
        }
    })

    expect(problematicWords).toEqual([])
})
