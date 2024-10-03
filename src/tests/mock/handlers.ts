import {http , HttpResponse} from 'msw'
import { db } from './db';

export const handlers = [
    ...db.posts.toHandlers('rest')
]