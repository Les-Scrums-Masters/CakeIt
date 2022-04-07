# Evènements envoyés par le serveur

### not_find_room
/

### room_joigned
numéro de la room

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

### start_day

### end_day





Arguments : /

### room_joigned

Arguments : numéro de la room

### game_started

Arguments: A DEFINIR

### next_day

Arguments: A DEFINIR

# Evènements envoyé par les joueurs

### create_room
nom du joueur

### join_room
roomId, playerName

### start_game
roomId

### disconnect
/




### ready
price, volume

Arguments : nom du joueur

### join_room

Arguments : roomId, playerName

### leave_room

Arguments : roomId, playerName

### start_game

Arguments: roomId

### end_day

Arguments : data

### disconnect

Arguments : /
