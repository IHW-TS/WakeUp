import discord
import asyncio

# Remplacez "YOUR_BOT_TOKEN" par votre propre jeton d'accès
client = discord.Client()
BOT_TOKEN = "YOUR_BOT_TOKEN"

# ID de l'utilisateur qui recevra les messages
user_id = "USER_ID"

# Fonction pour envoyer les messages privés
async def send_messages():
    user = await client.fetch_user(user_id)
    for i in range(10):
        message = f"Salut {user.mention}, ceci est le message {i+1} de votre bot Discord !"
        await user.send(message)
        await asyncio.sleep(1) # Attendre une seconde entre chaque message

# Événement pour détecter les mentions d'utilisateurs
@client.event
async def on_message(message):
    if message.author.bot: # Ignorer les messages des autres bots
        return

    if message.mentions and message.mentions[0].id == int(user_id): # Si l'utilisateur est mentionné dans le message
        await send_messages()

# Événement de connexion
@client.event
async def on_ready():
    print("Bot connecté à Discord !")

# Connexion du bot à Discord
client.run(BOT_TOKEN)
