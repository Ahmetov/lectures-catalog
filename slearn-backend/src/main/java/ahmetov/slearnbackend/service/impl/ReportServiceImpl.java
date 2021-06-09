package ahmetov.slearnbackend.service.impl;

import ahmetov.slearnbackend.service.ReportService;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

@Service
@Slf4j
public class ReportServiceImpl implements ReportService {

    @Override
    public ByteArrayInputStream generateLectureViewReport() {
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try {
            Font font = FontFactory.getFont(FontFactory.COURIER, 16, BaseColor.BLACK);
            Chunk chunk = new Chunk(
                    "Отчет о просмотрах лекций\n" +
                            "_\n" +
                            "Лекция: Лекция 1 Основы программирования в с++\n" +
                            "Просмотры: 150\n" +
                            "_"
                    , font);
            PdfWriter.getInstance(document, out);
            document.open();
            document.add(chunk);
            document.close();
        } catch (DocumentException e) {
            log.error(e.getMessage());
        }
        return new ByteArrayInputStream(out.toByteArray());
    }
}
