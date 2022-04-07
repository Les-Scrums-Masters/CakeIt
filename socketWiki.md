# Evènements envoyés par le serveur

### not_find_room

/

### room_joigned

roomId, playerId

### game_started

A DEFINIR

### refresh_players

Liste des Bakers

### new_news

Object News

### update_ingredients

Dictionnaire 5 ingredients
{
egg: {
value: [toutes les valeurs ...],
latest: x
evolution: 0.8
}
}

### next_day

date
DEBUT DE LA VENTE AUX VENTES

### end_day

PASSAGE AU BILAN / SLIDER

# Evènements envoyé par les joueurs

### create_room

playerName

### join_room

roomId, playerName

### ready

roomId, playerId, price, volume

### leave_room

roomId, playerId

### start_game

roomId

### disconnect

playerId
