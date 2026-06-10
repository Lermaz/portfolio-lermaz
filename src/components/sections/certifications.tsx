import { AspectRatio } from '@/components/ui/aspect-ratio';
import CERTIFICATIONS from '@/data/certifications';
import { ExternalLink, FileText } from 'lucide-react';
import Image from 'next/image';

export default function Certifications() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Certifications</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert) => (
          <article
            key={cert.pdf}
            className="border-border shadow-shadow rounded-base flex flex-col border-2 bg-secondary-background overflow-hidden">
            <a
              className="border-border group block border-b-2"
              href={cert.pdf}
              rel="noopener noreferrer"
              target="_blank">
              <AspectRatio ratio={4 / 3}>
                <Image
                  alt={`${cert.name} certificate`}
                  className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                  height={450}
                  src={cert.image}
                  width={600}
                />
              </AspectRatio>
            </a>

            <div className="flex flex-1 flex-col px-4 py-4 sm:px-5">
              <h3 className="font-heading text-base sm:text-lg">{cert.name}</h3>

              <span className="border-border shadow-shadow rounded-base text-main-foreground mt-3 inline-flex w-fit items-center gap-1.5 border-2 bg-main px-2.5 py-1 text-xs sm:text-sm">
                <cert.issuerIcon className="h-3.5 w-3.5 shrink-0" title="" />
                {cert.issuer}
              </span>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  className="border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none flex flex-1 items-center justify-center gap-1.5 rounded-base border-2 bg-background px-3 py-2 text-xs transition-all sm:text-sm"
                  href={cert.pdf}
                  rel="noopener noreferrer"
                  target="_blank">
                  <FileText className="h-3.5 w-3.5 shrink-0" />
                  View PDF
                </a>
                {cert.verifyUrl ? (
                  <a
                    className="border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none flex flex-1 items-center justify-center gap-1.5 rounded-base border-2 bg-background px-3 py-2 text-xs transition-all sm:text-sm"
                    href={cert.verifyUrl}
                    rel="noopener noreferrer"
                    target="_blank">
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    Verify
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
