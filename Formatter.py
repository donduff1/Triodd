import csv
import json

def format_csv(input_path, output_path):
    with open(input_path, 'r', encoding='utf-8') as infile, open(output_path, 'w', encoding='utf-8', newline='') as outfile:
        reader = csv.reader(infile)
        writer = csv.writer(outfile)

        for row in reader:
            formatted_row = []
            for item in row:
                try:
                    # Helyettesítse ki a dupla idézőjeleket, majd próbálja meg konvertálni JSON formátumba
                    formatted_item = json.loads(item.replace('""', '"'))
                except json.JSONDecodeError:
                    # Ha nem JSON, hagyja változatlanul
                    formatted_item = item
                formatted_row.append(formatted_item)

            writer.writerow(formatted_row)

if __name__ == "__main__":
    input_file_path = 'input.csv'
    output_file_path = 'output.csv'

    format_csv(input_file_path, output_file_path)
