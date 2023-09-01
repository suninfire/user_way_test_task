import { Request, Response } from 'express';
import Url from "../DataBaseModels/urlModel";

class UrlController {
    async shorteningLink(req: Request, res: Response) {
        try {
            const {link} = req.body;

            const prefix = "https://";
            let parts = link.split(".");

            if (parts.length < 2) {
                parts = link;
            }

            const main = parts[1];

            const filtered = main.replace(/[aeiouAEIOU]/g, "");

            const shortUrl = `${prefix}${filtered}`;

            const newUrl = await Url.create({originalUrl: link, shortUrl: shortUrl});
            await newUrl.save()

            res.json(shortUrl)

        } catch (e) {
            res.status(500).json(e);
        }
    }

    async findOriginalLink(req: Request, res: Response) {
        try {
            const {url} = req.body;
            const originalUrl = await Url.findOne({where: {shortUrl: url}})

            if (originalUrl) {
                res.json(originalUrl)
            }else {
                res.status(404).json({ error: 'Short URL not found' });
            }

            }catch (e) {
            res.status(500).json(e);
            }
        }
}
export const urlController = new UrlController();



