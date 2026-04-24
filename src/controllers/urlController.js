const { nanoid } = require('nanoid')
const Url = require('../models/Url')

const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body

    if (!originalUrl) {
      return res.status(400).json({ message: 'URL é obrigatória.' })
    }

    const shortCode = nanoid(8)

    const url = await Url.create({ originalUrl, shortCode })

    res.status(201).json({
      originalUrl: url.originalUrl,
      shortCode: `${process.env.BASE_URL}/${shortCode}`,
      clicks: url.clicks
    })
  } catch (error) {
    
    res.status(500).json({ message: 'Erro ao encurtar URL' })
  }
}

const redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode })

    if (!url) {
      return res.status(404).json({ message: 'URL não encontrada' })
    }

    url.clicks += 1
    await url.save()

    res.redirect(url.originalUrl)
  } catch (error) {
    res.status(500).json({message: 'Erro ao redirecionar'})
  }
}

const getStats = async (req,res) =>{
  try {
    const {shortCode} = req.params

    const url = await Url.findOne({shortCode})

    if(!url){
      return res.status(404).json({message: 'URL não encontrada'})
    }

    res.json({
      originalUrl: url.originalUrl,
      shortUrl: `${process.env.BASE_URL}/${shortCode}`,
      clicks: url.clicks,
      createdAt: url.createdAt
    })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar estatísticas' })
  }
}

module.exports = { shortenUrl, redirectUrl, getStats }