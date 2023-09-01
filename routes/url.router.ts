import { Router } from "express";

import {urlController} from '../controllers/url.controller'

export const urlRouter = Router();

urlRouter.post('/',
   urlController.shorteningLink
    );

urlRouter.get('/',
    urlController.findOriginalLink
);