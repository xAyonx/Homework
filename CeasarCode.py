import string

print("""Salve! \nHier kannst du einen Text nach der Methode von Ceasar decodieren.\nDu solltest jedoch
darauf achten, dass du Buchstaben nimmst.\nZahlen werden zwar angenommen, jedoch nicht decodiert.""")
#Eingabe fuer Textfeld.
littera = input("Bitte Text eingeben: ")

clavis = 26- 3                    #Impliziert den Wert des Schluessels zum Verschieben. Ob man subtrahiert oder addiert beeinflusst, ob der Text kodiert oder dekodiert wird.
clavis %= 26                    #hinzufuegen des modulo.
epistula = string.ascii_uppercase       #Buchstaben werden als string im ascii als Grossbuchstabe def.
movere = epistula[clavis:] + epistula[:clavis]  #hier erfolgt die Fkt zum verschieben um den Wert des schluessels.
signum = str.maketrans(epistula, movere)    #hier erfolgt die uebersetzung durch das zuvor eingegebene.
occultare = littera.translate(signum)       #in diese variable muendet das ergebnis der codierung ein.

print(occultare)                           