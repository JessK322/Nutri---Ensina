from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/sugestao', methods=['POST'])
def sugestao():
    data = request.get_json()
    imc = data.get("imc", 0)

    if imc < 18.5:
        msg = "Você está abaixo do peso. Considere aumentar o consumo de calorias saudáveis."
    elif imc < 24.9:
        msg = "Você está com peso normal. Continue com uma alimentação balanceada!"
    elif imc < 29.9:
        msg = "Você está com sobrepeso. Tente incluir mais frutas e legumes na dieta."
    else:
        msg = "Você está com obesidade. Procure um nutricionista para uma avaliação personalizada."

    return jsonify({"mensagem": msg})

if __name__ == '__main__':
    app.run(debug=True)
