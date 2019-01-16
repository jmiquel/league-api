const router = require('express').Router()
const Division = require('../models/division')

// router.post(`/user`, async (req, res) => {
//   const result = await prisma.createUser({
//     ...req.body,
//   })
//   res.json(result)
// })

// router.post(`/post`, async (req, res) => {
//   const { title, content, authorEmail } = req.body
//   const result = await prisma.createPost({
//     title: title,
//     content: content,
//     author: { connect: { email: authorEmail } },
//   })
//   res.json(result)
// })

// router.put('/publish/:id', async (req, res) => {
//   const { id } = req.params
//   const post = await prisma.updatePost({
//     where: { id },
//     data: { published: true },
//   })
//   res.json(post)
// })

// router.delete(`/post/:id`, async (req, res) => {
//   const { id } = req.params
//   const post = await prisma.deletePost({ id })
//   res.json(post)
// })

router.get('/:division', async (req, res) => {
  const response = await Division.getDivisionResults(req.params.division)

  res.send(response)
})

router.get('/:division/results', async (req, res) => {
  const division = await Division.getDivisionResults(req.params.division)
  const response = await Division.getDivisionStandings(division)

  res.send(response)
})

router.get('/:division/league', async (req, res) => {
  const division = await Division.getDivisionResults(req.params.division)
  const divisionResults = await Division.getDivisionStandings(division)
  const divisionTotals = await Division.getDivisionTotals(divisionResults)

  res.send(divisionTotals)
})

module.exports = router