import { Router } from 'express'

import { BookController } from '../../controllers'

const router = Router()

router.post('/book', BookController.createBook)
router.put('/book/:id', BookController.updateBook)
router.delete('/book/:id', BookController.deleteBook)
router.get('/book/:id', BookController.getBookById)
router.get('/books/:username', BookController.getBooks)

export default router