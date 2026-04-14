import os
import sys

base_dir = "C:/Users/DSi/Desktop/New folder/COACH"
docs_dir = os.path.join(base_dir, "All_Documents")
output_file = os.path.join(base_dir, "docs_temp/all_docs_content.txt")

os.makedirs(os.path.join(base_dir, "docs_temp"), exist_ok=True)

all_content = []

def read_doc_word(filename):
    import win32com.client
    import pythoncom
    
    pythoncom.CoInitialize()
    
    try:
        word = win32com.client.Dispatch("Word.Application")
        word.Visible = False
        
        doc = word.Documents.Open(os.path.abspath(filename))
        text = doc.Content.Text
        doc.Close(False)
        word.Quit()
        
        return text
    except Exception as e:
        print(f"Word COM Error: {e}")
        return None
    finally:
        pythoncom.CoUninitialize()

for filename in sorted(os.listdir(docs_dir)):
    if filename.endswith(".doc"):
        filepath = os.path.join(docs_dir, filename)
        print(f"Processing: {filename}")
        
        try:
            text = read_doc_word(filepath)
            if text:
                all_content.append(f"\n{'='*60}\n")
                all_content.append(f"FILE: {filename}\n")
                all_content.append(f"{'='*60}\n")
                all_content.append(text)
                print(f"  -> Extracted successfully")
            else:
                print(f"  -> Failed to extract")
        except Exception as e:
            print(f"  -> Error: {e}")

with open(output_file, "w", encoding="utf-8") as f:
    f.write("\n".join(all_content))

print(f"\nTotal content saved to {output_file}")