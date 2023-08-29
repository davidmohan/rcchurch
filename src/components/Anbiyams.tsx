import * as Dialog from "@radix-ui/react-dialog";
export default function Anbiyams() {
  const data = [
    {
      anbiyamImg: "https://ik.imagekit.io/netmaze/rcchurch/Alphonsa.jpg",
      anbiyamName: "St. Alphonsa Anbiyam",
      anbiyamAbout:
        "Saint Alphonsa Muttathupadathu (August 19, 1910-July 28, 1946) is a Catholic Saint, the second person of Indian origin to be canonized as a saint by the Roman Catholic Church, the first Indian woman canonized, and the first canonized saint of the Syro-Malabar Catholic Church, an Eastern Catholic Church. Alphonsamma, as she was locally known, had a poor and difficult childhood, experiencing early loss and suffering. She joined the Franciscan Clarist Congregation and, after completing her schooling, took her vows to the order in 1936. She taught school for years, plagued by illness throughout most her teaching career. On Sunday, October 12, 2008, Pope Benedict XVI announced her canonization at a ceremony at St Peter's Square.",
    },
    {
      anbiyamImg: "https://ik.imagekit.io/netmaze/rcchurch/infant-jesus.jpg",
      anbiyamName: "Infant Jesus Anbiyam",
      anbiyamAbout:
        "The Infant Jesus of Prague  is a 16th-century wax-coated wooden statue of the Child Jesus holding a globus cruciger of Spanish origin, now located in the Discalced Carmelite Church of Our Lady of Victories in Malá Strana, Prague, Czech Republic. First appearing in 1556, pious legends claim that the statue once belonged to Teresa of Ávila and was consequently donated to the Carmelite friars by Princess Polyxena of Lobkowicz in 1628.",
    },
    {
      anbiyamImg:
        "https://ik.imagekit.io/netmaze/rcchurch/Immaculate_Heart_of_Mary.jpg",
      anbiyamName: "Immaculate Mary (Amalorpava Matha)",
      anbiyamAbout:
        "The Immaculate Heart of Mary (Latin: Cor Immaculatum Mariae) is a Roman Catholic devotional name used to refer to the Catholic view of the interior life of Mary, mother of Jesus, her joys and sorrows, her virtues and hidden perfections, and, above all, her virginal love for God the Father, her maternal love for her son Jesus Christ, and her motherly and compassionate love for all mankind.  Traditionally, the Immaculate heart is depicted pierced with seven wounds or swords, in homage to the seven dolors of Mary and roses, usually red or white, wrapped around the heart.",
    },
    {
      anbiyamImg:
        "https://ik.imagekit.io/netmaze/rcchurch/1754756-arokia-matha.jpg",
      anbiyamName: "Arockia Matha Anbiyam",
      anbiyamAbout:
        'Our lady of Good Health popularly called "Our Lady of Vailankanni" is artributed to Mary, mother of Jesus in the small town of Velankanni, Tamil Nadu, India located on the shores of the Bay of Bengal. It is located 150 miles south of Madras in Tamil Nadu and 5 miles south of Nagapattinam. Our lady chose this place to dispense her miracles to mankind. A strong oral tradition attests to Our Lady\'s apparitions at Vailankanni (Velankanni) A Basilica artributed to both Portuguese and Indians stands in and around the sites of three apparitions. The iconic depiction of Our Lady of Good Health is also unique since it is one of two only icons where Mother Mary is shown wearing a sari (the only other is said to have been buried by Aurangzeb)',
    },
    {
      anbiyamImg: "https://ik.imagekit.io/netmaze/rcchurch/St-Joseph-1.webp",
      anbiyamName: "St. Joseph's Anbiyam",
      anbiyamAbout:
        "Joseph is venerated as Saint Joseph in the Catholic Church. In Catholic traditions, Joseph is regarded as the patron saint of workers and is associated with various feast days. The month of March is dedicated to Saint Joseph. Pope Pius IX declared him to be both the patron and the protector of the Catholic Church, in addition to his patronages of the sick and of a happy death, due to the belief that he died in the presence of Jesus and Mary. Joseph has become patron of various dioceses and places. He is venerated with the title of Most Chaste,according to the dogma of perpetual virginity of Mary. A specific veneration is also tributed to the most Chaste and Pure Heart of the parents of the Lord Jesus",
    },
    {
      anbiyamImg:
        "https://ik.imagekit.io/netmaze/rcchurch/360406fbf91eceb7c3c3d5efba0c50fc--sacred-garden-holy-mary.jpg",
      anbiyamName: "Fathima Matha Anbiyam",
      anbiyamAbout:
        "The story begins in the village of Fatima, Portugal, on May 13, 1917. On that fateful day near that tiny village, The Blessed Virgin Mary, Mother of God, appeared to three young peasant children: Francisco, Jacinta, and Lucia; ages 10, 9 and 7. As was the custom, these youngsters were tending their family’s sheep when “a Lady all in white, more brilliant than the sun… indescribably beautiful,” standing above a bush, appeared to the youngsters. From May through October 1917, the Lady appeared and spoke to the children on the 13th day of each month.",
    },
    {
      anbiyamImg: "https://ik.imagekit.io/netmaze/rcchurch/images.jpeg",
      anbiyamName: "Sacred Heart Anbiyam",
      anbiyamAbout:
        'The Sacred Heart, also known as the Most Sacred Heart of Jesus (Sacratissimum Cor Iesu in Latin), is one of the most widely practised and well-known Catholic devotions, wherein the heart of Jesus is viewed as a symbol of "God\'s boundless and passionate love for mankind". This devotion to Christ is predominantly used in the Catholic Church, followed by High-Church Anglicans, Lutherans and some Western Rite Orthodox. In the Latin Church, the liturgical Solemnity of the Most Sacred Heart of Jesus is celebrated the third Friday after Pentecost. The 12 promises of the Most Sacred Heart of Jesus are also extremely popular.',
    },
    {
      anbiyamImg: "https://ik.imagekit.io/netmaze/rcchurch/download.jpeg",
      anbiyamName: "Christ the King Anbiyam",
      anbiyamAbout:
        "Christ the King is a title of Jesus referring to the idea of the Kingdom of God where the Christ is seated at the Right Hand of God In the Greek text, the Christ is explicitly identified as king several times, so in Matthew 2:2 (“Where is the new-born king of the Jews?”). In John 18, Pilate refers to the implication that the Christ is a royal title by inquiring explicitly if Jesus claims to be the “king of the Jews” . Similarly, in John 1:49, a follower addresses Jesus as “the king of Israel” Outside of the gospel, the First Epistle to Timothy (6:14-15) explicitly applies the phrase of “king of kings and lord of lords” taken from the Pentateuch (Deuteronomy 10:17) to Jesus Christ.",
    },
    {
      anbiyamImg:
        "https://ik.imagekit.io/netmaze/rcchurch/st-sebastian-traditional-image-hd.webp",
      anbiyamName: "St. Sebastian Anbiyam",
      anbiyamAbout:
        "St Sebastian was an early Christian saint and martyr. According to traditional belief, he was killed during the Roman emperor Diocletian's persecution of Christians. He is commonly depicted in art and literature tied to a post or tree and shot with arrows. He is venerated in the Roman Catholic Church and the Orthodox Church. Saint Sebastian is a popular male saint, especially among athletes.",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 space-y-10">
        <span className="text-3xl uppercase font-bold">Anbiyams</span>
        <div className="w-10/12 max-sm:space-y-5 sm:space-x-5 flex flex-wrap justify-center">
          {data.map((anbiyam: any) => (
            <div className="sm:w-1/4 sm:my-5 flex flex-col items-center space-y-5">
              <img
                src={anbiyam.anbiyamImg}
                className="hover:brightness-75 transition duration-300 rounded-xl sm:h-60"
              />
              <span className="flex flex-col items-center space-y-3">
                <span className="text-orange-800 font-bold text-xl text-center">
                  {anbiyam.anbiyamName}
                </span>
                <Dialog.Dialog>
                  <Dialog.Trigger className="w-32 bg-yellow-400 py-2 text-sm rounded-md transition duration-300 hover:bg-yellow-800 hover:text-white">
                    Read More...
                  </Dialog.Trigger>
                  <Dialog.Overlay className="fixed -top-3 left-0 w-full h-screen bg-black/50" />
                  <Dialog.Content className="fixed inset-0 flex justify-center items-center px-8">
                    <div className="bg-white py-8 sm:py-8 px-5 rounded-md flex flex-col items-center sm:w-1/2">
                      <div className="w-11/12 flex justify-between items-center">
                        <span className="text-2xl font-bold">
                          {anbiyam.anbiyamName}
                        </span>
                        <Dialog.Close>
                          <i className="fa-solid fa-xmark text-gray-400 max-sm:text-xl"></i>
                        </Dialog.Close>
                      </div>
                      <hr className="border-1 border-gray-300 w-11/12 mt-3" />
                      <p className="max-h-96 overflow-y-scroll mt-4 text-justify w-11/12 indent-10 pr-3 max-sm:text-sm">
                        {anbiyam.anbiyamAbout}
                      </p>
                    </div>
                  </Dialog.Content>
                </Dialog.Dialog>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
