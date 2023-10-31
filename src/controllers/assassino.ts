import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/index";

const placeController = {

    async createAssassino(req: Request, res: Response, next: NextFunction) {
        try {

            const { nome, apelido, genero, nacionalidade, data_de_nascimento, categorias, vitimas_confirmadas, vitimas_atribuidas, anos_de_atividade, paises_de_atividade, passado_e_infancia, assassinatos, julgamento, data_da_prisao,
                sentenca, local_da_prisao, executado, data_da_morte, imagens_do_assassino, imagens_das_vitimas, midia_em_portugues } = req.body;

            const newAssassino = await prisma.assassino.create({
                data: {
                    nome: nome,
                    apelido: apelido,
                    genero: genero,
                    nacionalidade: nacionalidade,
                    data_de_nascimento: data_de_nascimento,
                    categorias: {
                        connect:
                            categorias.map((x: any) => ({ id: x })),
                    },
                    vitimas_confirmadas: vitimas_confirmadas,
                    vitimas_atribuidas: vitimas_atribuidas,
                    anos_de_atividade: anos_de_atividade,
                    paises_de_atividade: paises_de_atividade,
                    passado_e_infancia: passado_e_infancia,
                    assassinatos: assassinatos,
                    julgamento: julgamento,
                    data_da_prisao: data_da_prisao,
                    sentenca: sentenca,
                    local_da_prisao: local_da_prisao,
                    executado: executado,
                    data_da_morte: data_da_morte,
                    imagens_do_assassino: imagens_do_assassino,
                    imagens_das_vitimas: imagens_das_vitimas,
                    midia_em_portugues: midia_em_portugues,
                },
                include: {
                    categorias: true,
                },
            });

            res.status(201).json(newAssassino)

        } catch (error) {
            next(error)
        }
    },

    async listAssassinos(req: Request, res: Response, next: NextFunction) {
        try {
            const listAssassinos = await prisma.assassino.findMany();
            res.status(200).json(listAssassinos);
        } catch (error) {
            next(error);
        }
    },

    async byIdAssassino(req: Request, res: Response, next: NextFunction) {
        try {

            const { id } = req.params;

            const assassino = await prisma.assassino.findUnique({
                where: {
                    id,
                }
            });

            if (!assassino) {
                res.status(404).json("Assassino não encontrado!")
            };

            res.status(200).json(assassino)

        } catch (error) {
            next(error)
        }

    },

    async updateAssassino(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { nome, apelido, genero, nacionalidade, data_de_nascimento, categorias, vitimas_confirmadas, vitimas_atribuidas, anos_de_atividade, paises_de_atividade, passado_e_infancia, assassinatos, julgamento, data_da_prisao,
                sentenca, local_da_prisao, executado, data_da_morte, imagens_do_assassino, imagens_das_vitimas, midia_em_portugues } = req.body;


            const assassino = await prisma.assassino.findUnique({
                where: {
                    id,
                }
            });

            if (!assassino) {
                res.status(400).json("Assassino não encontrado!")
            };

            const updated = await prisma.assassino.update({
                where: {
                    id,
                },
                data: {
                    nome,
                    apelido,
                    genero,
                    nacionalidade,
                    data_de_nascimento,
                    categorias,
                    vitimas_confirmadas,
                    vitimas_atribuidas,
                    anos_de_atividade,
                    paises_de_atividade,
                    passado_e_infancia,
                    assassinatos,
                    julgamento,
                    data_da_prisao,
                    sentenca,
                    local_da_prisao,
                    executado,
                    data_da_morte,
                    imagens_do_assassino,
                    imagens_das_vitimas,
                    midia_em_portugues
                },
            });

            res.status(200).json({ result: updated })
        } catch (error) {
            next(error)

        }
    },

    async deleteAssassino(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;

            const assassino = await prisma.assassino.findUnique({
                where: {
                    id,
                }
            });

            if (!assassino) {
                res.status(404).json("Assassino não encontrado!")
            };

            await prisma.assassino.delete({
                where: {
                    id,
                },
            });

            res.sendStatus(204)

        } catch (error) {
            next(error)
        }
    },

}


export default placeController